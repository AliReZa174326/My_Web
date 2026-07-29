let gameMode = "";
let currentPlayer = "X";

let buttons=document.querySelectorAll(".board button");

let turn="X";

let game=[
"","","",
"","","",
"","",""
];


let win=[
[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]
];


buttons.forEach((btn,index)=>{

btn.onclick=()=>{
if(gameMode=="easy" && turn=="O") return;

if(game[index]!="") return;


game[index]=turn;

btn.innerHTML=turn;


check();

// اگر بازی تمام نشده
if(document.getElementById("result").innerHTML==""){

if(gameMode=="easy"){

    turn="O";

    document.getElementById("turn").innerHTML="نوبت: O";

    setTimeout(aiEasyMove,300);

}

else if(gameMode=="medium"){

    turn="O";

    document.getElementById("turn").innerHTML="نوبت: O";

    setTimeout(aiMediumMove,300);

}

else if(gameMode=="hard"){

    turn="O";

    document.getElementById("turn").innerHTML="نوبت: O";

    setTimeout(aiHardMove,300);

}

else{

    turn = "O";

    document.getElementById("turn").innerHTML="نوبت: O";

}

turn="O";
        turn="O";

        document.getElementById("turn").innerHTML="نوبت: O";

       

    }else{

        turn = turn=="X"?"O":"X";

        document.getElementById("turn").innerHTML =
        "نوبت: "+turn;

    }

}


}

);


function check(){


for(let w of win){

let a=game[w[0]];
let b=game[w[1]];
let c=game[w[2]];


if(a && a==b && a==c){

document.getElementById("result").innerHTML=
a+" برنده شد 🎉";

buttons.forEach(x=>x.disabled=true);

}

}


if(!game.includes("")){

document.getElementById("result").innerHTML=
"مساوی شد 🤝";

}

}



function restart(){

game=[
"","","",
"","","",
"","",""
];


buttons.forEach(b=>{
b.innerHTML="";
b.disabled=false;
});


turn="X";

document.getElementById("turn").innerHTML="نوبت: X";

document.getElementById("result").innerHTML="";

}
function startGame(mode){

    gameMode = mode;

    document.getElementById("menu").style.display = "none";

    document.getElementById("game").style.display = "block";

}

function aiEasyMove(){

    let empty=[];

    for(let i=0;i<game.length;i++){

        if(game[i]==""){

            empty.push(i);

        }

    }

    if(empty.length==0) return;

    let move=empty[Math.floor(Math.random()*empty.length)];

    game[move]="O";

    buttons[move].innerHTML="O";

    check();

    turn="X";

    document.getElementById("turn").innerHTML="نوبت: X";

}

function findWinningMove(player){

    const winPatterns = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    for(let pattern of winPatterns){

        let [a,b,c] = pattern;

        let line = [game[a],game[b],game[c]];

        let countPlayer = line.filter(x=>x===player).length;
        let countEmpty = line.filter(x=>x==="").length;

        if(countPlayer===2 && countEmpty===1){

            if(game[a]==="") return a;
            if(game[b]==="") return b;
            if(game[c]==="") return c;

        }

    }

    return -1;

}

function aiMediumMove(){

    // 1. اگر خودش می‌تواند ببرد
    let move = findWinningMove("O");

    if(move==-1){

        // 2. جلوی برد بازیکن را بگیر
        move = findWinningMove("X");

    }

    // 3. اگر هیچ‌کدام نبود، تصادفی
    if(move==-1){

        let empty=[];

        for(let i=0;i<game.length;i++){

            if(game[i]==""){

                empty.push(i);

            }

        }

        if(empty.length==0) return;

        move = empty[
            Math.floor(Math.random()*empty.length)
        ];

    }

    game[move]="O";

    buttons[move].innerHTML="O";

    check();

    turn="X";

    document.getElementById("turn").innerHTML =
    "نوبت: X";

}

function minimax(board, depth, isMaximizing){

    let result = checkWinnerAI(board);

    if(result !== null){

        if(result == "O") return 10 - depth;
        if(result == "X") return depth - 10;
        if(result == "draw") return 0;

    }

    if(isMaximizing){

        let bestScore = -Infinity;

        for(let i=0;i<9;i++){

            if(board[i] == ""){

                board[i] = "O";

                let score = minimax(board, depth+1, false);

                board[i] = "";

                bestScore = Math.max(score,bestScore);

            }

        }

        return bestScore;

    }else{

        let bestScore = Infinity;

        for(let i=0;i<9;i++){

            if(board[i] == ""){

                board[i] = "X";

                let score = minimax(board, depth+1, true);

                board[i] = "";

                bestScore = Math.min(score,bestScore);

            }

        }

        return bestScore;

    }

}

function checkWinnerAI(board){

    const wins=[

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    for(let pattern of wins){

        let [a,b,c]=pattern;

        if(
            board[a]!="" &&
            board[a]==board[b] &&
            board[b]==board[c]
        ){

            return board[a];

        }

    }

    if(board.every(cell=>cell!="")){

        return "draw";

    }

    return null;

}

function aiHardMove(){

    let bestScore = -Infinity;

    let move = -1;

    for(let i=0;i<9;i++){

        if(game[i]==""){

            game[i]="O";

            let score=minimax(game,0,false);

            game[i]="";

            if(score>bestScore){

                bestScore=score;

                move=i;

            }

        }

    }

    game[move]="O";

    buttons[move].innerHTML="O";

    check();

    turn="X";

    document.getElementById("turn").innerHTML="نوبت: X";

}
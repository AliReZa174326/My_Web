// ===== Player =====
const playerImg = new Image();

playerImg.src = "Images/player.png";


    // هسته آبی شعله
function drawEngineFlame(){

   let flameHeight = 20 + Math.random()*15;

    ctx.beginPath();

    ctx.moveTo(
        player.x + player.width/2 - 4,
        player.y + player.height
    );

    ctx.lineTo(
        player.x + player.width/2,
        player.y + player.height + flameHeight*0.6
    );

    ctx.lineTo(
        player.x + player.width/2 + 4,
        player.y + player.height
    );
}
const player = {

    x:220,
    y:620,

    width:80,
    height:80,

    speed:6,

    color:"#00ff66"

};

let keys = {};

document.addEventListener("keydown",(e)=>{

    keys[e.key]=true;

});

document.addEventListener("keyup",(e)=>{

    keys[e.key]=false;

});


function updatePlayer(){

    if(keys["ArrowLeft"] && player.x>0){

        player.x-=player.speed;

    }

    if(keys["ArrowRight"] && player.x<canvas.width-player.width){

        player.x+=player.speed;

    }

}

function drawPlayer(){

    ctx.fillStyle=player.color;

    // بدنه
ctx.drawImage(
    playerImg,
    player.x,
    player.y,
    player.width,
    player.height
);

  
 }

 player.x = canvas.width / 2 - player.width / 2;
player.y = canvas.height - player.height - 120;
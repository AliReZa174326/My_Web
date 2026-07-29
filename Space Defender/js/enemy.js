// ============================
// Enemy System V1.1
// ============================

let enemies = [];

const enemyImg = new Image();
enemyImg.src = "Images/enemy.png";

// هر ۱ ثانیه یک دشمن جدید
setInterval(() => {

    let level = getLevel();

    let enemy = {

        x: Math.random() * (canvas.width - 50),
        y: -60,

        width: 50,
        height: 50,

        speed: 2,

        hp: 1,

        score: 10,

        type: "normal"

    };

    // Level 2
    if(level >= 2){

        enemy.type = "shooter";

        enemy.score = 7;

    }

    // Level 4
    if(level >= 4){

        enemy.hp = 2;

        enemy.speed = 3;

        enemy.score = 5;

    }

    enemies.push(enemy);

},1000);



// ============================
// Update
// ============================

function updateEnemies(){

    for(let i=enemies.length-1;i>=0;i--){

        let enemy = enemies[i];

        enemy.y += enemy.speed;

        // دشمن تیرانداز
        if(enemy.type=="shooter"){

            if(Math.random()<0.01){

                shootEnemy(enemy);

            }

        }

        // اگر از صفحه رد شد
        if(enemy.y > canvas.height){

            enemies.splice(i,1);

            lives--;

            updateLives();

            if(lives<=0){

                gameOver();

            }

        }

    }

}



// ============================
// Draw
// ============================

function drawEnemies(){

    enemies.forEach(enemy=>{

        ctx.drawImage(

            enemyImg,

            enemy.x,
            enemy.y,

            enemy.width,
            enemy.height

        );

    });

}
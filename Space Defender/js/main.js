canvas.width = Math.min(window.innerWidth,480);
canvas.height = Math.min(window.innerHeight-120,700);

if(window.innerWidth<=768){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight*0.8;

}else{

canvas.width=480;

canvas.height=700;

}

let highestScore = localStorage.getItem("highestScore") || 0;

let lives = 3;

const livesText = document.createElement("div");

livesText.id="lives";

livesText.style.color="white";

livesText.style.fontSize="25px";

livesText.style.position="absolute";

livesText.style.top="80px";

livesText.style.left="20px";

document.body.appendChild(livesText);


function updateLives(){

    livesText.textContent="❤️".repeat(lives);

}

updateLives();

let score = 0;

const scoreText = document.getElementById("score");

const highestText = document.getElementById("highest");

highestText.textContent = highestScore;
function gameLoop(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    updateStars();
    updatePlayer();
    updateBullets();
    updateEnemies();
    updateEnemyBullets();
    updateExplosions();

    checkCollisions();
    checkEnemyBulletCollision();
    checkPlayerCollision();

    drawStars();
    drawPlayer();
    drawBullets();
    drawEnemies();
    drawEnemyBullets();
    drawExplosions();

    requestAnimationFrame(gameLoop);

}

gameLoop();

function gameOver(){

gameRunning=false;

document.getElementById("gameOverScreen").style.display="flex";

document.getElementById("finalScore").textContent=score;

document.getElementById("finalHighest").textContent=highestScore;

}

function restartGame(){

location.reload();

}

function resizeCanvas(){

    if(window.innerWidth <= 768){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.75;

        player.x = canvas.width / 2 - player.width / 2;
player.y = canvas.height - player.height - 20;

    }else{

        canvas.width = 480;
        canvas.height = 700;

    }

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function resizeGame(){

    if(window.innerWidth <= 768){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.8;

    }else{

        canvas.width = 480;
        canvas.height = 700;

    }

    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - player.height - 20;

}

resizeGame();

window.addEventListener("resize", resizeGame);
// ===== Bullets =====
const laserSound = new Audio("Sounds/lazer.mp3");

let bullets = [];

function shoot(){

    bullets.push({

        x:player.x + player.width/2 - 3,

        y:player.y,

        width:6,

        height:18,

        speed:10

    

    });

    laserSound.currentTime=0;

    laserSound.play();
}

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        shoot();

    }

});


function updateBullets(){

    for(let i=bullets.length-1;i>=0;i--){

        bullets[i].y-=bullets[i].speed;

        if(bullets[i].y<0){

            bullets.splice(i,1);

        }

    }

}


function drawBullets(){

    ctx.fillStyle="yellow";

    bullets.forEach(b=>{

        ctx.fillRect(

            b.x,

            b.y,

            b.width,

            b.height

        );

    });

}
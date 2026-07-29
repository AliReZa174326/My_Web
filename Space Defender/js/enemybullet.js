let enemyBullets = [];

function shootEnemy(enemy){

    enemyBullets.push({

        x: enemy.x + enemy.width / 2,
        y: enemy.y + enemy.height,
        width: 5,
        height: 15,
        speed: 5

    });

}


function updateEnemyBullets(){

    enemyBullets.forEach((b,index)=>{

        b.y += b.speed;


        // پاک کردن تیرهای خارج صفحه
        if(b.y > canvas.height){
            enemyBullets.splice(index,1);
        }

    });

}


function drawEnemyBullets(){

    enemyBullets.forEach(b=>{

        ctx.fillStyle="red";

        ctx.fillRect(
            b.x,
            b.y,
            b.width,
            b.height
        );

    });

}
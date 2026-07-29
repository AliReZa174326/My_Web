// ===== Collision =====

function checkCollisions(){

    for(let i=enemies.length-1;i>=0;i--){

        for(let j=bullets.length-1;j>=0;j--){

            if(

                bullets[j].x < enemies[i].x + enemies[i].width &&
                bullets[j].x + bullets[j].width > enemies[i].x &&
                bullets[j].y < enemies[i].y + enemies[i].height &&
                bullets[j].y + bullets[j].height > enemies[i].y

            ){

            createExplosion(
    enemies[i].x + enemies[i].width/2,
    enemies[i].y + enemies[i].height/2
);

// کم کردن جان دشمن
enemies[i].hp--;

bullets.splice(j,1);

// اگر جانش تمام شد
if(enemies[i].hp <= 0){

    score += enemies[i].score;

    scoreText.textContent = score;

    if(score > highestScore){

        highestScore = score;

        localStorage.setItem("highestScore", highestScore);

        highestText.textContent = highestScore;

    }

    enemies.splice(i,1);

}

break;
                if(score > highestScore){

                    highestScore = score;

                    localStorage.setItem("highestScore", highestScore);

                    highestText.textContent = highestScore;

}

scoreText.textContent = score;

                break;

            }

        }

    }

}


function checkPlayerCollision(){

    for(let i=enemies.length-1;i>=0;i--){

        let enemy = enemies[i];


        if(

            player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y

        ){

            enemies.splice(i,1);

            lives--;

            updateLives();


            if(lives <= 0){

                alert("GAME OVER\nScore: " + score);

                location.reload();

            }

        }

    }

}

function checkEnemyBulletCollision(){

    enemyBullets.forEach((bullet,index)=>{

        if(
            bullet.x < player.x + player.width &&
            bullet.x + bullet.width > player.x &&
            bullet.y < player.y + player.height &&
            bullet.y + bullet.height > player.y
        ){

            // حذف تیر
            enemyBullets.splice(index,1);


            // کم شدن جان
            lives--;


            // آپدیت نمایش قلب‌ها
            updateLives();


            // اگر جان صفر شد
            if(lives <= 0){

                gameOver();

            }
        }

    });

}
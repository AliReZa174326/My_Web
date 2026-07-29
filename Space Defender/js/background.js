// ===== Space Background =====
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let stars = [];


for(let i=0;i<100;i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        size:Math.random()*2+1,

        speed:Math.random()*2+0.5

    });

}



function updateStars(){

    stars.forEach(star=>{

        star.y += star.speed;


        if(star.y > canvas.height){

            star.y=0;

            star.x=Math.random()*canvas.width;

        }

    });

}



function drawStars(){

    ctx.fillStyle="white";


    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(

            star.x,

            star.y,

            star.size,

            0,

            Math.PI*2

        );

        ctx.fill();

    });

}
console.log("background loaded");
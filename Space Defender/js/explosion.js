let explosions = [];


function createExplosion(x,y){

    explosions.push({

        x:x,

        y:y,

        radius:5,

        alpha:1

    });

}



function updateExplosions(){

    for(let i=explosions.length-1;i>=0;i--){

        let e=explosions[i];

        e.radius+=2;

        e.alpha-=0.04;


        if(e.alpha<=0){

            explosions.splice(i,1);

        }

    }

}



function drawExplosions(){

    explosions.forEach(e=>{

        ctx.beginPath();

        ctx.arc(
            e.x,
            e.y,
            e.radius,
            0,
            Math.PI*2
        );


        ctx.fillStyle=
        `rgba(255,150,0,${e.alpha})`;


        ctx.fill();

    });

}
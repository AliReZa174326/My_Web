const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");


if(leftBtn){
leftBtn.addEventListener("touchstart",()=>{
    keys["ArrowLeft"]=true;
});
}


if(rightBtn){
rightBtn.addEventListener("touchstart",()=>{
    keys["ArrowRight"]=true;

});

}

const fireBtn = document.getElementById("fire");

if(fireBtn){

fireBtn.addEventListener("touchstart",()=>{

    shoot();

});

}

leftBtn.addEventListener("touchend",()=>{
    keys["ArrowLeft"]=false;
});

rightBtn.addEventListener("touchend",()=>{
    keys["ArrowRight"]=false;
});

leftBtn.addEventListener("touchstart",()=>{

keys["ArrowLeft"]=true;

});

leftBtn.addEventListener("touchend",()=>{

keys["ArrowLeft"]=false;

});



rightBtn.addEventListener("touchstart",()=>{

keys["ArrowRight"]=true;

});

rightBtn.addEventListener("touchend",()=>{

keys["ArrowRight"]=false;

});



fireBtn.addEventListener("touchstart",()=>{

shoot();

});

document.querySelectorAll("#mobile-controls button").forEach(button => {

    button.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });

});

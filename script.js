const text = "به وبسایت من خوش آمدید";

let i = 0;

function type(){

if(i < text.length){

document.getElementById("title").innerHTML += text.charAt(i);

i++;

setTimeout(type,100);

}

}

type();

function scrollProjects(){

document.getElementById("projects").scrollIntoView({

behavior:"smooth"

});

}

function toggleMenu(){

    let menu = document.getElementById("nav-menu");

    menu.classList.toggle("active");

}

document.querySelectorAll("#nav-menu a").forEach(link => {

    link.addEventListener("click", () => {


        document

        .getElementById("nav-menu")

        .classList.remove("active");

    });

});

function openImage(src){

let viewer=document.getElementById("image-viewer");
let img=document.getElementById("big-image");

img.src=src;
viewer.style.display="flex";

}


function closeImage(){

document.getElementById("image-viewer").style.display="none";

}

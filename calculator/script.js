const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "خطا";
    }
}

function sqrt(){
    if(display.value!=="")
        display.value = Math.sqrt(Number(display.value));
}

function power(){
    if(display.value!=="")
        display.value = Math.pow(Number(display.value),2);
}

function percent(){
    if(display.value!=="")
        display.value = Number(display.value)/100;
}

function showPerimeter(){
    document.getElementById("calculator").style.display="none";
    document.getElementById("area").style.display="none";
    document.getElementById("perimeter").style.display="block";
    updatePerimeterInputs();
}

function showCalculator(){
    document.getElementById("calculator").style.display="block";
    document.getElementById("area").style.display="none";
}

function showArea(){
    document.getElementById("calculator").style.display="none";
    document.getElementById("area").style.display="block";
    updateInputs();
}

function updateInputs(){

const shape=document.getElementById("shape").value;
const inputs=document.getElementById("inputs");

switch(shape){

case "square":
inputs.innerHTML=`<input id="a" placeholder="ضلع">`;
break;

case "rectangle":
inputs.innerHTML=`
<input id="a" placeholder="طول">
<input id="b" placeholder="عرض">`;
break;

case "triangle":
inputs.innerHTML=`
<input id="a" placeholder="قاعده">
<input id="b" placeholder="ارتفاع">`;
break;

case "circle":
inputs.innerHTML=`<input id="a" placeholder="شعاع">`;
break;

case "trapezoid":
inputs.innerHTML=`
<input id="a" placeholder="قاعده بزرگ">
<input id="b" placeholder="قاعده کوچک">
<input id="c" placeholder="ارتفاع">`;
break;

case "rhombus":
inputs.innerHTML=`
<input id="a" placeholder="قطر بزرگ">
<input id="b" placeholder="قطر کوچک">`;
break;

}

}

function calculateArea(){

const shape=document.getElementById("shape").value;
let result=0;

switch(shape){

case "square":
result=Math.pow(Number(a.value),2);
break;

case "rectangle":
result=Number(a.value)*Number(b.value);
break;

case "triangle":
result=(Number(a.value)*Number(b.value))/2;
break;

case "circle":
result=Math.PI*Math.pow(Number(a.value),2);
break;

case "trapezoid":
result=((Number(a.value)+Number(b.value))*Number(c.value))/2;
break;

case "rhombus":
result=(Number(a.value)*Number(b.value))/2;
break;

}

document.getElementById("result").innerHTML=
"مساحت = "+result.toFixed(2);

}

function updatePerimeterInputs(){

const shape=document.getElementById("perimeterShape").value;
const inputs=document.getElementById("perimeterInputs");

switch(shape){

case "square":
inputs.innerHTML=`
<input id="p1" placeholder="ضلع">
`;
break;

case "rectangle":
inputs.innerHTML=`
<input id="p1" placeholder="طول">
<input id="p2" placeholder="عرض">
`;
break;

case "triangle":
inputs.innerHTML=`
<input id="p1" placeholder="ضلع اول">
<input id="p2" placeholder="ضلع دوم">
<input id="p3" placeholder="ضلع سوم">
`;
break;

case "circle":
inputs.innerHTML=`
<input id="p1" placeholder="شعاع">
`;
break;

}

}

function calculatePerimeter(){

const shape=document.getElementById("perimeterShape").value;
let result=0;

switch(shape){

case "square":
result=4*Number(document.getElementById("p1").value);
break;

case "rectangle":
result=2*(Number(document.getElementById("p1").value)+Number(document.getElementById("p2").value));
break;

case "triangle":
result=
Number(document.getElementById("p1").value)+
Number(document.getElementById("p2").value)+
Number(document.getElementById("p3").value);
break;

case "circle":
result=2*Math.PI*Number(document.getElementById("p1").value);
break;

}

document.getElementById("perimeterResult").innerHTML=
"محیط = "+result.toFixed(2);

}

updateInputs();
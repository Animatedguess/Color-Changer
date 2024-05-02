let plane1=document.getElementById("Plane-1");
let plane2=document.getElementById("Plane-2");
let plane3=document.getElementById("Plane-3");
let plane4=document.getElementById("Plane-4");
let reset = document.getElementById("reset");
console.log(plane1);
let body = document.querySelector("body");
plane1.addEventListener("click",function(){
    body.style.backgroundColor="blue";
})
plane2.addEventListener("click",function(){
    body.style.backgroundColor="red";
})
plane3.addEventListener("click",function(){
    body.style.backgroundColor="yellow";
})
plane4.addEventListener("click",function(){
    body.style.backgroundColor="white";
})
reset.addEventListener("click",function(){
    body.style.backgroundColor="black";
})
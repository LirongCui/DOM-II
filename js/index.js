// Your code goes here
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
}, false);

let letsGo = document.querySelector(".text-content p")
document.addEventListener("keypress", function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    letsGo.style.background = "#" + randomColor;
    setTimeout(function(){
        letsGo.style.background = "";
    }, 500);
})

let keyEvent = document.querySelector(".intro h2");
document.addEventListener("keydown", function(){
    keyEvent.style.background = "yellow";
    setTimeout(function(){
        keyEvent.style.background = "";
    }, 500);
}, false);


let changeNav = document.querySelector(".nav");
document.addEventListener("wheel", function(){
    changeNav.style.background = "purple";
    setTimeout(function(){
        changeNav.style.background = "";
    }, 500);
}, false);


let loadPic = document.querySelector(".intro img");
loadPic.addEventListener("load", ()=>{
    alert ("Pictures Loaded!!");
});


let header = document.querySelector(".main-navigation");
document.addEventListener("dblclick", function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    header.style.background = "#" + randomColor;
    setTimeout(function(){
        header.style.background = "";
    }, 500);
})


let click = document.querySelector(".container");
document.addEventListener("click", function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.background = "#" + randomColor;
    setTimeout(function(){
        event.target.style.background = "";
    }, 500);
})


let noContext = document.querySelector(".intro h2");
noContext.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert("Don't even try...");
})


let mouseEnter = document.querySelector(".content-pick");
mouseEnter.addEventListener("mouseenter", function(event){
    event.target.style.color = "pink";
})


let mouseLeave = document.querySelector(".content-pick");
mouseLeave.addEventListener("mouseleave", function(event){
    event.target.style.color = "";
})



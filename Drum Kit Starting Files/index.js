

// document.querySelector("button").addEventListener("click",handelClick);
//
// function handelClick()
// {
// alert("hello");
//
// }


// document.querySelector("button").addEventListener("click",function () //anonymous function function without name
// {
// alert("hello");
//
// });
//

// var noofbuttons=document.querySelectorAll(".drum").length;
// for(var i=0; i<noofbuttons;i++)
// {
//
// document.querySelectorAll(".drum")[i].addEventListener("click",function () //anonymous function function without name
// {
// var inner=this.innerHTML;
// if(inner=="w")
// {
//   var audio=new Audio('sounds/tom-1.mp3');
//    audio.play();
// }else
//  if (inner=="a") {
//   var audio=new Audio('sounds/tom-2.mp3');
//    audio.play();
// }else
// if (inner=="s") {
//   var audio=new Audio('sounds/tom-3.mp3');
//    audio.play();
// }else
// if (inner=="d") {
//   var audio=new Audio('sounds/tom-4.mp3');
//    audio.play();
// }else
// if (inner=="j") {
//   var audio=new Audio('sounds/snare.mp3');
//    audio.play();
// }else
// if (inner=="k") {
//   var audio=new Audio('sounds/kick-bass.mp3');
//    audio.play();
// }else
//  if (inner=="l") {
//   var audio=new Audio('sounds/crash.mp3');
//    audio.play();
// }
// });
// }

var noofbuttons=document.querySelectorAll(".drum").length;
for(var i=0; i<noofbuttons;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",function () //anonymous function function without name
{
var inner=this.innerHTML;
sound(inner);
style(inner);
});
}

document.addEventListener("keypress",function(e){

sound(e.key);
style(e.key);
});

function sound(key){

  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "k":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    case "l":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

}

}


function style(currentkey)
{
var change=document.querySelector("."+currentkey);

change.classList.add("pressed");
setTimeout(function(){

change.classList.remove("pressed");
},100)
change.style="color:red"
}







// var audio=new Audio('sounds/tom-3.mp3');
// audio.play();





// document.getElementsByClassName("w drum")[0].addEventListener("click",function ()
// {
//
// alert("hello");
//
// });

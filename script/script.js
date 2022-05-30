let navm = document.querySelectorAll(".navm");
let informBlock = document.querySelectorAll(".inform-block");
let overlay = document.querySelector(".overlay");

//Открытие вкладок
clear =()=>{
    for(let i = 0; i<informBlock.length; i++){
        informBlock[i].classList.remove("active");
    }
}
overlay.addEventListener('click',function(){
    for(let i = 0; i<informBlock.length; i++){
        informBlock[i].classList.remove("active");
        overlay.style.display = "none";
    }
})
for(let i = 0; i<informBlock.length; i++){
    navm[i].onclick = () => {
        clear();
        overlay.style.display = "block";
        informBlock[i].classList.add("active");  
    }
}
// Слайдер
let offset = 0;
let sliderLine = document.querySelector(".slider-line");

document.querySelector(".back-btn").onclick = () =>{
    offset += 600;
    offset > 0 ? offset = -1800: false;
    sliderLine.style.left = offset + 'px';
    
}
document.querySelector(".next-btn").onclick = () =>{
    offset -= 600;
    offset < -1800 ? offset = 0: false;
    sliderLine.style.left = offset + 'px';
}




sliderLine.addEventListener("touchstart", oneTouch);
sliderLine.addEventListener('touchmove', moveTouch);
var xDown = null;
var yDown = null;


function moveTouch(event){
}
function oneTouch (event) {
    let firstTouch = getTouches(event)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}
function getTouches(evt) {
    return evt.touches;
}
function moveTouch(evt) {
    if ( ! xDown ) {
    return;
    }
     
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
     
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) { //отлавливаем разницу в движении
    if ( xDiff > 0 ) {
        offset -= 600;
        offset < -1800 ? offset = 0: false;
        sliderLine.style.left = offset + 'px';
    } 
    else {
        offset += 600;
        offset > 0 ? offset = -1800: false;
        sliderLine.style.left = offset + 'px';
    }
    // свайп был, обнуляем координаты
    xDown = null;
    yDown = null;
    };
}


//Карточки проектов
let project = document.querySelectorAll(".project");
let projectCard = document.querySelectorAll(".project-card");
let count = 0;

for(let i = 0; i < projectCard.length; i++){

    projectCard[i].addEventListener("click", function() {
        let frontCard = document.querySelectorAll(".front-card");
        let backCard =document.querySelectorAll(".back-card");
        if(count == 0){
            frontCard[i].style.transform = "rotateY(180deg)";
            backCard[i].style.transform = "rotateY(360deg)";
            count++;
        }
        else if(count == 1){
            frontCard[i].style.transform = "rotateY(0)";
            backCard[i].style.transform = "rotateY(180deg)";
            count--;
        }
    });
}

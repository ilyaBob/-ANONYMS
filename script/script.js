let about = document.querySelector(".about");
let projects = document.querySelector(".projects");

let aboutBlock = document.querySelector(".about-block");
let projectsBlock = document.querySelector(".projects-block");

function clear (){
    aboutBlock.classList.remove("active");
    projectsBlock.classList.remove("active");
}
about.onclick = () => {
    clear();
    aboutBlock.classList.add("active");  
}
projects.onclick = () => {
    clear();
    projectsBlock.classList.add("active");
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
//Карточки проектов
let project = document.querySelectorAll(".project");
let projectCard = document.querySelectorAll(".project-card");
let count = 0;
 console.log(projectCard.length);

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

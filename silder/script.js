// console.log('Slider app');

const body = document.body;
const slides=document.querySelectorAll(".slide");
const left =document.getElementById("left");
const right =document.getElementById("right");


let activeSlide = 0;

function setBgForBody(){
    body.style.backgroundImage=slides[activeSlide].style.backgroundImage;
}
setBgForBody();


function setActiveSlides(){
    slides.forEach((slide)=>slide.classList.remove("active"))
    slides[activeSlide].classList.add("active")
}


right.addEventListener("click",()=>{
activeSlide++;

if(activeSlide >slides.length-1){
    activeSlide=0;
}

setBgForBody();
setActiveSlides();
})

left.addEventListener("click",()=>{
    activeSlide--;
    
    if(activeSlide < 0){
        activeSlide=0;
    }
    
    setBgForBody();
    setActiveSlides();
    })
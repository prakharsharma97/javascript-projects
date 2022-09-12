
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelectorAll(".nextBtn");
const prevBtn = document.querySelectorAll(".prevBtn");
slides.forEach(function(slide,index){
    slides.style.left = `${index*100}%`;
});
let counter = 0;
nextBtn.addEventListener("click",function () {
    counter++;
    carousel();
});

prevBtn.addEventListener("click",function () {
    counter--;
    carousel;
});

function carousel() {
    
    if (counter < slides.length -1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slide.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";
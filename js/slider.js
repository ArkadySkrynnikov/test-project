let imagesArr = [{
        src:"images/second-completed.jpg",
        city:"Rostov-on-Don LCD admiral",
        area:"81m2",
        time:"3,5 months"
    },{
        src:"images/second-completed2.jpg",
        city:"Sochi Thieves",
        area:"105 m2",
        time:"4 months"
    },{ 
        src:"images/second-completed3.jpg",
        city:"Rostov-on-Don Patriotic",
        area:"93m2",
        time:"4 months"
}];

function initSlider(){
    if(!imagesArr || !imagesArr.length) return;

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitles = document.querySelector(".slider__titles"); 
    let cityDiv = document.querySelector(".city__slider");
    let areaDiv = document.querySelector(".area__slider");
    let timeDiv = document.querySelector(".time__slider");

    initImages();

    function initImages(){
        imagesArr.forEach((image,index)=>{
            let imageDiv = `<img class="image n${index} ${index === 0? "active" : ""}" src="${imagesArr[index].src}" data-index="${index}">`;

            sliderImages.innerHTML += imageDiv;
        });
    };

    initArrows();

    function initArrows(){
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow=>{
            arrow.addEventListener("click",function(){
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if(arrow.classList.contains("left")){
                    nextNumber = curNumber === 0?imagesArr.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === imagesArr.length - 1? 0 :curNumber + 1;
                }
                moveSlider(nextNumber);
                cityDiv.innerHTML = imagesArr[curNumber].city;
                areaDiv.innerHTML = imagesArr[curNumber].area;
                timeDiv.innerHTML = imagesArr[curNumber].time;
            });
        });
    }

    function moveSlider(num){
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n"+num).classList.add("active")
    }

    initDots();

    function initDots() {
        imagesArr.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });

        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
                sliderDots.querySelector(".active").classList.remove("active");
                this.classList.add("active");
                cityDiv.innerHTML = imagesArr[+sliderImages.querySelector(".active").dataset.index].city;
                areaDiv.innerHTML = imagesArr[+sliderImages.querySelector(".active").dataset.index].area;
                timeDiv.innerHTML = imagesArr[+sliderImages.querySelector(".active").dataset.index].time;
            });
        });
    }

    initTitles();

    function initTitles(){
        sliderTitles.querySelectorAll(".slider__titles-item").forEach(title=>{
            title.addEventListener("click",function(){
                cityDiv.innerHTML = imagesArr[+this.dataset.index].city;
                areaDiv.innerHTML = imagesArr[+this.dataset.index].area;
                timeDiv.innerHTML = imagesArr[+this.dataset.index].time;
                moveSlider(this.dataset.index);
            });
        });

    }
}

document.addEventListener("DOMContentLoaded",initSlider)
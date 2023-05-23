"use strict";
let images = [
    `./img/01.webp`,
    `./img/02.webp`,
    `./img/03.webp`,
    `./img/04.webp`,
    `./img/05.webp`,
]
//img piccola
let slider_mini = document.querySelector(`.mini_slider`)
let slide_mini = ``

//img grande
let slider_container = document.querySelector(`.slider`)
let slide_img = ``

for(let i = 0; i < images.length; i++){

    let img_current = images[i]
    //img grande
    slide_img +=    `<div class="slide">
                            <img src="${img_current}" />
                        </div> `

    //img piccola                    
    slide_mini +=   `<div class="mini_slide layer">
                            <img src="${img_current}" />
                        </div>`   
}
//img piccola
slider_mini.innerHTML = slide_mini;
slider_container.innerHTML = slide_img;

//img grande
let allSlides = document.getElementsByClassName(`slide`);
let active_element = 0
allSlides[active_element].classList.add(`active`);

//img piccola
let all_mini_Slides = document.getElementsByClassName(`mini_slide`);
let active_mini_element = 0
all_mini_Slides[active_mini_element].classList.add(`layer_on`);

let upButton = document.querySelector(`.sopra`);
let downButton = document.querySelector(`.sotto`);

upButton.addEventListener(`click`, function(){
    
    if( active_element < (images.length -1) ){
        //img grande
        allSlides[active_element].classList.remove(`active`);
        active_element ++;
        allSlides[active_element].classList.add(`active`)
        //img piccola
        all_mini_Slides[active_mini_element].classList.remove(`layer_on`);
        active_mini_element ++;
        all_mini_Slides[active_mini_element].classList.add(`layer_on`)
    }else {
        //img grande
        allSlides[active_element].classList.remove(`active`);   
        active_element = 0
        allSlides[active_element].classList.add(`active`);
        //img piccola
        all_mini_Slides[active_mini_element].classList.remove(`layer_on`);
        active_mini_element = 0;
        all_mini_Slides[active_mini_element].classList.add(`layer_on`)
    }

})
downButton.addEventListener(`click`, function(){
    if( active_element > 0 ){
        //img grande
        allSlides[active_element].classList.remove(`active`);
        active_element --;
        allSlides[active_element].classList.add(`active`)
        //img piccola
        all_mini_Slides[active_mini_element].classList.remove(`layer_on`);
        active_mini_element --;
        all_mini_Slides[active_mini_element].classList.add(`layer_on`)

    }else {
        //img grande
        allSlides[active_element].classList.remove(`active`);   
        active_element = (images.length -1)
        allSlides[active_element].classList.add(`active`);
        //img piccola
        all_mini_Slides[active_mini_element].classList.remove(`layer_on`);
        active_mini_element = (images.length -1)
        all_mini_Slides[active_mini_element].classList.add(`layer_on`)
    }

})
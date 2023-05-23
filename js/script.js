"use strict";
let images = [
    `./img/01.webp`,
    `./img/02.webp`,
    `./img/03.webp`,
    `./img/04.webp`,
    `./img/05.webp`,
]
console.log(images)

let slider_container = document.querySelector(`.slider`)
let slide_img = ``

for(let i = 0; i < images.length; i++){

    let img_current = images[i]
    slide_img +=    `<div class="slide">
                            <img src="${img_current}" />
                        </div> `
}

slider_container.innerHTML = slide_img;

let allSlides = document.getElementsByClassName(`slide`);
let active_element = 0
allSlides[active_element].classList.add(`active`);

let upButton = document.querySelector(`.sopra`);
let downButton = document.querySelector(`.sotto`);

upButton.addEventListener(`click`, function(){
    if( active_element < (images.length -1) ){
        allSlides[active_element].classList.remove(`active`);
        active_element ++;
        allSlides[active_element].classList.add(`active`)

    }

})
downButton.addEventListener(`click`, function(){
    if( active_element > 0 ){
        allSlides[active_element].classList.remove(`active`);
        active_element --;
        allSlides[active_element].classList.add(`active`)

    }

})
'use strict';

import { refs } from './refs.js';

window.addEventListener('scroll', upBtnAppear);
window.addEventListener('load', upBtnAppear);

function upBtnAppear() {
    const scrolled = window.pageYOffset;
    const clientHeight = document.documentElement.clientHeight;

    if (scrolled > clientHeight) {
        refs.upBtn.addEventListener('click', onUpBtnClick);
        refs.upBtn.style.opacity = 1;
    } else if (scrolled < clientHeight) {
 
        refs.upBtn.style.opacity = 0;

        refs.upBtn.removeEventListener('click', onUpBtnClick);
    }
}

function onUpBtnClick() {
    window.scrollTo(0, 0);
}

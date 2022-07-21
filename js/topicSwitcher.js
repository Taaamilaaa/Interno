"use strict"

import { refs } from "./refs.js"

document.addEventListener("DOMContentLoaded", getLocalTopic);
refs.checkBox.addEventListener('click', onTopicSwitch);


function getLocalTopic() {
    let topic = '';

    if (localStorage.getItem("topic") === null) {
        topic = 'lihgt';
        localStorage.setItem("topic", JSON.stringify(topic));

    } else {
        topic = JSON.parse(localStorage.getItem("topic"));

    };

    changeTopic(topic);
}


function changeTopic(topic) {
    if (topic === "light") {

        onLightTopicChange(topic);
        return;
    } else if (topic === "darck") {

        onDarckTopicChange(topic);
        return;

    }
}


function onTopicSwitch(e) {
    let topic = "";

    if (e.target.checked) {
        topic = 'darck';

        localStorage.setItem("topic", JSON.stringify(topic));
        onDarckTopicChange(topic);

        // const images = imgChange();

        // images.forEach((el, index) => {
        //     for (var key in el) {
        //         if (el[key]) {

        //         }
        //         console.log(el[key])
        //     }
        // })





    } else if (!e.target.checked) {
        topic = 'light';

        localStorage.setItem("topic", JSON.stringify(topic));

        onLightTopicChange(topic);
    }
}



const onLightTopicChange = (topic) => {

    document.documentElement.style.setProperty('--background-color', 'var(--background-color-light-topic)');
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-light-topic)');
    document.documentElement.style.setProperty('--title-color', 'var(--title-color-light-topic)');
    document.documentElement.style.setProperty('--minor-background-color', 'var(--minor-background-color-light-topic)');

    refs.hero.style.backgroundImage = "url(/images/hero-img.jpg)";
    return;
};

const onDarckTopicChange = (topic) => {
    refs.checkBox.checked = "true";

    document.documentElement.style.setProperty('--background-color', 'var(--background-color-darck-topic)');
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-darck-topic)');
    document.documentElement.style.setProperty('--title-color', 'var(--title-color-darck-topic)');
    document.documentElement.style.setProperty('--minor-background-color', 'var(--minor-background-color-darck-topic)');

    [...refs.reviweText, ...refs.experianseText, ...refs.blogMasText, ...refs.reviwePlaceText, refs.heroText].forEach(el => {
        el.style.color = 'var(--text-color-light-topic)';
    });

    refs.hero.style.backgroundImage = "url(/images/hero-img__bw.jpg)";

    return;
}


const images = imgChange();

console.log(images);

function imgChange() {
    const imgPathArr = [];

    refs.img.forEach((el, index) => {
        if (!el.id) {
            return
        } else {
            const pathArr = el.src.split('/');
            const name = pathArr[pathArr.length - 1];

            const element = {
                "color": name,
                "bw": `${name}__bw`
            }

            imgPathArr.push(element);}
});
    return imgPathArr;
}
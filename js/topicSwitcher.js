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
    } else if (topic === "dark") {

        onDarkTopicChange(topic);
        return;

    }
}


function onTopicSwitch(e) {
    let topic = "";

    if (e.target.checked) {
        topic = 'dark';

        localStorage.setItem("topic", JSON.stringify(topic));
        onDarkTopicChange(topic);
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

    refs.hero.style.backgroundImage = "url(./images/hero-img.jpg)";
    imgChange(topic);
    return;
};

const onDarkTopicChange = (topic) => {
    refs.checkBox.checked = "true";

    document.documentElement.style.setProperty('--background-color', 'var(--background-color-dark-topic)');
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark-topic)');
    document.documentElement.style.setProperty('--title-color', 'var(--title-color-dark-topic)');
    document.documentElement.style.setProperty('--minor-background-color', 'var(--minor-background-color-dark-topic)');

    [...refs.reviweText, ...refs.experianseText, ...refs.blogMasText, ...refs.reviwePlaceText, refs.heroText].forEach(el => {
        el.style.color = 'var(--text-color-light-topic)';
    });

    refs.hero.style.backgroundImage = "url(./images/hero-img__bw.jpg)";
    imgChange(topic);
    return;
};


function imgChange(topic) {

    refs.img.forEach((el) => {
        if (!el.id) {
            return;
        } else {

            let imgNamesArr = el.src.split('/');
            const name = imgNamesArr[imgNamesArr.length - 1];
            let newName = name.split(".");
            switch (topic) {
                case "dark":
                    newName[0] = newName[0] + "__bw";
                    break;
                case "light":
                    newName[0] = newName[0].split("__bw").join("");
                    break;
                default: break;
            }
imgNamesArr[imgNamesArr.length - 1] = newName.join(".");
            const newPath = imgNamesArr.join("/");
            
            el.src = newPath;
        }
    });

}
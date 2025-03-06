"use strict";

let question1 = document.getElementById('questions1');
let question2 = document.getElementById('questions2');
let question3 = document.getElementById('questions3');

let paragraphe1 = document.querySelector('.paragraphe1');
let paragraphe2 = document.querySelector('.paragraphe2');
let paragraphe3 = document.querySelector('.paragraphe3');

question1.addEventListener('click', () => {
    question1.classList.toggle('open');
    paragraphe1.classList.toggle('visible');

    if (question1.classList.contains('open')) {
        question1.style.maxHeight = "200px"; // Ajustez la hauteur selon vos besoins
        paragraphe1.style.opacity = "1";
        paragraphe1.style.visibility = "visible";
    } else {
        question1.style.maxHeight = "20px"; // Réduire la hauteur
        paragraphe1.style.opacity = "0";
        paragraphe1.style.visibility = "hidden";
    }
});

question2.addEventListener('click', () => {
    question2.classList.toggle('open');
    paragraphe2.classList.toggle('visible');

    if (question2.classList.contains('open')) {
        question2.style.maxHeight = "200px"; // Ajustez la hauteur selon vos besoins
        paragraphe2.style.opacity = "1";
        paragraphe2.style.visibility = "visible";
    } else {
        question2.style.maxHeight = "20px"; // Réduire la hauteur
        paragraphe2.style.opacity = "0";
        paragraphe2.style.visibility = "hidden";
    }
});

question3.addEventListener('click', () => {
    question3.classList.toggle('open');
    paragraphe3.classList.toggle('visible');

    if (question3.classList.contains('open')) {
        question3.style.maxHeight = "200px"; // Ajustez la hauteur selon vos besoins
        paragraphe3.style.opacity = "1";
        paragraphe3.style.visibility = "visible";
    } else {
        question3.style.maxHeight = "20px"; // Réduire la hauteur
        paragraphe3.style.opacity = "0";
        paragraphe3.style.visibility = "hidden";
    }
});


function toggleMentions() {
    const mentions = document.getElementById("mentions");
    const icon = document.getElementById("icon");
    if (mentions.classList.contains("max-h-0")) {
      mentions.classList.remove("max-h-0", "opacity-0");
      mentions.classList.add("max-h-96", "opacity-100");
      icon.textContent = "▲";
    } else {
      mentions.classList.remove("max-h-96", "opacity-100");
      mentions.classList.add("max-h-0", "opacity-0");
      icon.textContent = "▼";
    }
}

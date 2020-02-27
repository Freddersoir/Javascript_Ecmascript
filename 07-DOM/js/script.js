'use strict'

// alert("I am ready !!!");

document.addEventListener('DOMContentLoaded',() =>{

    let title = document.querySelector('h1');
    console.log(title);

    let monParagraphe = document.querySelector('p');//.querySelector sélectionne le premier <p>
    console.log(monParagraphe);

    let mesParagraphes = document.querySelectorAll("p");//.querySelectorAll sélectionne tous les <p>
    console.log(mesParagraphes);   
});
/*
const maFonction = function(param1, param2){
    //mon traitement
}
maFonction(a,b);
*/

function hello(){
    console.log("Hello World");
}
hello();

function helloWorld(name){
    console.log(`Hello ${name}`)
}
helloWorld('Julien')

// var name = prompt('Quel est votre nom ?');
// console.log(name);

// function helloWorld(name2){
//     console.log(`Hello ${name2}`)
// }
// helloWorld(name)

function helloWorld(){
    let name = prompt('Quel est votre nom ?');
    console.log(`Hello ${name}`);
}
helloWorld();

function addition(param1, param2){
    let resultat = param1 + param2;
    console.log(`${param1} + ${param2} = ${resultat}`);
}
addition(2,3);

/*
    Tout ce qui se passe dans une fonction...Reste dans la fonction
*/

function multiple(num1, num2){
    let result = num1 * num2;
    return result;
}
console.log(multiple(2,5));

function carre(nombre){
    nombre *= nombre;
    return nombre;
}
let nb = 2;
nb = carre(nb);
console.log(nb);
console.log(carre(nb));

/*Exo 1 :
    Pour créer une fonction on va utiliser :
        1) le mot clé function
        2) un nom : maFonction
        3) des paramètres/arguments dans les parenthèses de maFonction
        4) le corps : ma function (param){...}
*/

console.log("_________Les expressions de fonction_____");


const openWindowPlease = function (){
    console.log(openWindowPlease);
}

openWindowPlease();

const multiplication = function (num1, num2){
    let resultat = num1 * num2;
    return resultat;
}
let number1 = 3;
let number2 = 5;
let res = multiplication(number1,number2);
console.log("res = "+res);

/*
    Les fonctions immédiatement invoqué peuvent servir à rendre un fichier, variable, ou fonction privée.
*/

( function(){
    console.log("fonction truc");
})();

(function(param1){
    console.log(param1);
})('truc');

console.log("________________CLOSURES____________");

/*
Il est possible d'imbriquer une fonction dans une autre fonction.
La fonction fille (fonction dans la fonction) ne pourra etre appelé que depuis la fonction mère.
*/

function closure(str){
    let prenom = "Juliette";

    function affichePrenom(){
        console.log('Bonjour'+prenom);
    }
    if(str === "OK"){
        affichePrenom()
    }else{
        console.log("Rien a afficher");
    }
}

//affichePrenom(); => impossible car appelée en dehors de la fonction mère

closure("truc");

function giveMeSecretMsg(login, password){
    const msg = "Ultra confidentiel";
    const secretPassWord = "Admin";
    const errorMsg = "Vous n'êtes pas autorisé Blablaaaa...";
    if(login === "admin" && password === secretPassWord){
        printMsg();
    }else{
        console.log(errorMsg);
    }

    function printMsg(){
        console.warn(`Le message secret pour l'admin est : ${msg}`);
    }
}
giveMeSecretMsg("admin", "admin");

/*
    Les fonctions fléchés

        exemple : () => {};
*/

console.log('__________________Fonctions fléchées')

let numbers = [1,2,3,4,5,6];

function printNum(element){
    console.log(element);
}
numbers.forEach(printNum);

console.log('_____version 2')
numbers.forEach(function(element){
    console.log(element);
});


console.log('_____version 3')
numbers.forEach((element)=>{
    console.log(element);
});

console.log('_____version 4')
numbers.forEach(element => console.log(element));

console.log('__________Fonction rest parameter_________')

//par rapport chiffres ds le tableau ci-dessus
function calculSomme(tab){
    let result = 0;
    for(let cellule of tab){
        result += cellule;
    }
    return result;
}
console.log(calculSomme(numbers));

//par rapport à une suite de nombre
function calculSommeV2(...nombres){
    let result = 0;
    for(let num of nombres){
        result += num;
    }
    return result;
}
console.log(calculSommeV2(1));
console.log(calculSommeV2(1, 2, 3));
console.log(calculSommeV2(1, 2, 3, 10, 22, 124));

//par rapport à une suite de nombre et un max
function calculSommeV3(max, ...nombres){
    let result = 0;
    for(let num of nombres){
        result += num;
    }
    if(result> max){
        console.log(result + " > " + max);
    }else{
        console.log(result + " < " + max);
    }
}
calculSommeV3(30,2,4,67,8,2);

//
let texte = "Bonjour";
console.log([...texte]);

let arr1 = [1,2,3];
let arr2 = ["a","b","c"];

let arr3 = [...arr1, ...arr2];
let arr4 = [arr1, arr2];

console.log("arr1 : "+arr1);
console.log("arr2 : "+arr2);
console.log("arr3 : ",arr3);
console.log("arr4 : ",arr4);

let cel1 = arr4[0];
let cel2 = arr4[1];
console.log(cel1);
console.log(cel2);


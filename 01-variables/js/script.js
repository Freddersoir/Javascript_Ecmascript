//Mon commentaire
/*
    Mon commentaire sur plusieurs lignes
*/

/*
    Une variable est une zone mémoire dans laquelle on pourra stocker des informations.
    3 mots clés pour déclarer une variable :
    > var
    > let
    > const
*/

var maVariable = "ma Var";

let i = 0;
console.log(i);
i=2;
console.log(i);

const MACONST = 'ma constante';

console.log(MACONST);
/*
MACONST = 'truc'; >> Pas possible de Modifier une constante /!\
console.log(MACONST);
*/

/*
Il n'y a pas de typage explicite en javascript
/*

/*
Convention de nomage :
    On met les constentes en Majuscule
    On met les noms de variable en camelCase, exemple : leNomDeMaVariable
    Un nom de variable ne commence jamais par un nombre.
    Il peut commencer par une Majuscule, une minuscle, _ , $ 


    kebab-case, exemple : nom-de-Variable-en-kebab-case
    snake case, exemple : nom_de_variable_en_snake_case
*/

//PORTEE DES VARIABLES :

let t = 5;
if(true){
    t = 7;
}
console.log("t : "+t);

if(true){
    let t2 = 5;
    console.log("t2 : "+t2);
}
console.log("t2 v2: "+t2);


// Les types de variables => 7 types

    // Le type String
    let prenom = 'loic';

    // Le type Number
    let age = 40;

    // Le type Boolean 2 valeurs : true ou false
    let happy = true;

    // Le type Null
    let hasCar = null;

    // Le type Undefined
    let sex = undefined;

    // Le type Symbol
    

    // Le type Object
    let human = {};


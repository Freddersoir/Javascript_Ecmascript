'use strict'

/*
Exo 1 : declarer une variable qui contiendra un nombre entier qui s'appelle nombre et lui affecter le nombre 13
*/
let nombre = 13;
console.log(nombre);

/*
Exo 2 : declarer une variable nombre 2 qui contiendra le nombre flottant 15,5
*/
let nombre2 = 15.5;

/*
Exo 3 : Exo 1 :déclarer une variable b qui prendra la valeur : true
*/
let b = true;

/*
Exo 4 : declarer une variable nombre3 qui ne pourra plus chnger de valeur après lui avoir donner la valeur 60
*/
const NOMBRE3 = 60;

/*
Exo 5 :
Déclarer une variable prenom contenant votre prénom
Déclarer une variable nom contenant votre nom
Déclarer une variable nomComplet contenant votre nom et votre prénom
*/
let prenom = 'fred'
let nom = 'dersoir'
let nomComplet = prenom +' '+ nom;
console.log(nomComplet);

/*
Exo 6 :
Appeler une fonction ditBonjour recevant deux paramètres nom et prénom
Et retournant une phrase "Bonjour ..." avec le nom et le prénom
Afficher le résultat dans la console
*/

function ditBonjour(prenom, nom){
    console.log(`Bonjour ${prenom} ${nom}`);
}
ditBonjour('Fred' , 'Dersoir')

/*
Exo 7 :
Faire une fonction qui affiche une fenetre en fonction de la réponse à la question : Quel jour serons nous demain si aujourd'hui est la veille d'hier ?
La réponse est renseignée par l'utilisateur...
*/

function askQuestion(){
    let reponse = prompt ('Quel jour serons nous demain si aujourd\'hui est la veille d\'hier ?')
    if(bonneReponse(reponse)){
        alert('Bonne réponse');
    }else{
        rejouer();
    }
}
function bonneReponse(reponse){
    let goodAnswer = "hier";

    if(reponse.toLowerCase() === goodAnswer){
        return true;
    }
    return false;
}
function rejouer(){
    if(confirm('You lose... try again ?')){
        askQuestion();
    }else{
        alert("By by looooooooser ^__-");
    }
}
askQuestion();

/*
Exo 8 :
Faire une fonction qui s'auto-execute et qui affiche "Bonjour"+prenom qu'elle prendra en paramètre
*/

(function(prenom){
    console.log(`Bonjour ${prenom}`);
}) (prompt(`Quel est votre prénom ?`));

/*
Exo 9 :
Faire une expression de fonction qui divise 2 nombres et retourne le resultat.
*/

    let diviser = function(nb1, nb2){
        let result = nb1 / nb2;
        return result;
    }
    console.log(diviser(6,3));

        //ou affichage dans la console avec une variable
    /*
    let diviser = function(nb1, nb2){
        let result = nb1 / nb2;
        return result;
    }
    let number1 = diviser(6,3);
    console.log(number1);
    */

/*
Exo 10 :
Réaliser un switch qui prends la variable nombre2 et qui affiche :

    "a" si nombre2 est égale à 3
    "b" si nombre2 est égale à 5
    "c" si nombre2 est égale à 7
    "d" si nombre2 est égale à autre chose
*/

function testNombre2(nombre2){
    switch(nombre2){
        case 3:
            console.log("a");
            break;
        case 5:
            console.log("b");
            break;
        case 7:
            console.log("c");
            break;
        default:
            console.log("d");
            break;
    }
}
let num = parseInt(prompt('Saisir nombre'));
testNombre2(num);//permet de tester le switch à l'aide d'une fonction

    //ou
    
//testNombre2(3);//permet de tester le switch en changeant la valeur 3 manuellement





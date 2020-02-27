/*
A l'aide de la condition ternaire, la variable nb prendra comme valeur 42 si nb2 est égal à 6, sinon nb sera égal à 9.

    Etape 1 : Utiliser les conditions pour afficher le résultat

    Etape 2 : Traduire en ternaire
*/

//Etape 1:
let nb, nb2 = 6;

if(nb2 === 6){
    nb = 42;
}else{
    nb = 9;
}
console.log(nb);


//Etape 2 :
nb2 === 6 ? nb=42: nb=9;
console.log(nb);


/*
Faire une fonction qui affiche l'opération de 2 nb en fonction du signe passé en 3ème parametre.

Bonus : La valeur du 3ème paramètre est "+"
*/

function operation(num1, num2, signe="+"){

    switch(signe){
        case '+':
            return (num1 + num2);
        case '*':
            return (num1 * num2);
        case '-':
            return (num1 - num2);
        default :
            return 'it is not possible';
    }
}

console.log('operation(2,3) : '+operation(2,3));
console.log('operation(2,3,*) : '+operation(2,3,"*"));
console.log('operation(2,3,/) : '+operation(2,3,"/"));


/*
Créer une fonction qui prend comme paramètre un tableau contenant des strings et des number

La fonction retourne un tableau qui contient 2 tableaux :
    - l'un avec QUE des numbers,
    - l'autre avec QUE des strings

push

type of string / number

for of

*/

function sortArray(tab){
    let tabnum = [];
    let tabstring = [];
    let newtab;

    for(let elt of tab){
        if(typeof elt === "string"){
            tabstring.push(elt);
        }else if(typeof elt === "number"){
            tabnum.push(elt);
        }
    }
    newtab = [tabnum, tabstring];
    return newtab;

}

let [a1, a2] = sortArray(['Hello', 34, 'world', 6, 7, 11, 42, 'it', 'lalalala', 56, 99, 111]);

console.log(a1);
console.log(a2);


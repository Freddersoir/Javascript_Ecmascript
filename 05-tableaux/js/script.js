'use strict';//permet de trouver les erreurs plus facilement lors du débuguage
console.log("ARRAY !!");

/**
 * En JS, les tableaux sont des objets.
 */

 console.log("_____Déclaration de tableaux______");

 let nombres = new Array(1,2,3,4,5);//Créer un tableau ayant 5 cellules déjà renseignées
 console.log("nombres : "+nombres);
 console.log("nombres : ",nombres);
 console.log(`nombres : ${nombres}`);

let nombres_v2 = [3,5,7,10,6];//Créer un tableau ayant 5 cellules déjà renseignées
console.log(nombres_v2);

let nombres_v3 = [];//Créer un tableau vide
console.log(nombres_v3);

let nombres_v4 = new Array(6);//Créer un tableau ayant 6 cellules vides
console.log(nombres_v4);

console.log("_____Remplir un tableau______");

let array_1 = [];
console.log("<0> array_1 : ",array_1);
array_1[0]=1;
array_1[1]=2;
array_1[2]=3;
array_1[3]=4;
console.log("<1> array_1 : ",array_1);


let array_2 = [];
let maxCel = 5;
console.log("<0> array_2 : ",array_2);
for(let i=0 ; i<maxCel ;i++){
    array_2[i] = i+1;
}
console.log("<2> array_2 : ",array_2);

let longueurTab = array_2.length;//calcul nb de cellules dans le tableau
console.log(longueurTab);
array_2[array_2.length] = 33;// Ajoute à la fin du tableau une cellule contenant le nb 33
console.log(array_2);

array_2[array_2.length+6] = 66;// Ajoute à la cellule contenant correspondant à la taille du tableau (nb de cellules actuelle) +6, la cellule contenant le nb 66
console.log(array_2);


let varTest1 = "truc";
let array_3 = [
    1,
    2,
    3,
    55,
    true,
    'Coucou',
    varTest1,
    ['machin', ['bidule',5],55]
];
console.log('array_3 : ',array_3);//Un tableau peut contenir plusieurs types de valeurs

console.log(array_3[4]);//Poin_____Remplir

console.log("_____Parcourrir un tableau______");

//tableau array_3
console.log(" loop FOR");
for(let i=0 ; i<array_3.length ; i++){
    console.log(array_3[i]);
}
console.log(" loop FOR...OF");
for(const elt of array_3){
    console.log(elt);
}
console.log(" loop FOREACH");
array_3.forEach(function(elt){
    console.log(elt);
})

array_3.forEach(elt => console.log(elt));


console.log(" loop FOR OF entries ()");
for(const [index, elt] of array_3.entries()){
    console.log(` array_3[${index}] = ${elt}`);

    console.log(` ==> array_3[${index}] =`,elt);
}

console.log(" loop FOREACH index/valeur");
array_3.forEach(function(elt, index){
    console.log(` ==> array_3[${index}] =`,elt);
});
array_3.forEach((elt, index) => console.log(` ++> array_3[${index}] =`,elt));


console.log("_____Affectation par décomposition______");

let tab_1 = ["un", "deux", "trois"];

let var_1 = tab_1 [0];
let var_2 = tab_1 [1];
let var_3 = tab_1 [2];

let [var_4, var_5, var_6] = tab_1;

console.log(var_2);
console.log(var_4);

console.log('var_1 : '+var_1);
console.log('var_2 : '+var_2);

[var_2,var_1] = tab_1; //-----> Je mets à jour mes variables en les inversants
console.log('var_1 : '+var_1);
console.log('var_2 : '+var_2);


let [aa=2, bb=34] = [10,'truc'];
console.log('aa : '+aa);
console.log('bb : '+bb);

let[g1, g2, ...g3] = array_3;// Affectation de nouveaux couples variable via la fonction rest "..."
console.log('g1 : ',g1);
console.log('g2 : ',g2);
console.log('g3 : ',g3);


console.log("_____Les Méthodes______");

let courses=["poivron", "carottes", "poisson", "épinard", "pomme"];
/*
Ajouter à la fin de mon tableau une valeur :
*/
courses.push('nutella');
console.log(courses);

/*
Supprimer le dernier élément de mon tableau :
*/
courses.pop();
console.log(courses);

/*
Supprimer le premier élément de mon tableau :
*/
courses.shift();
console.log(courses);

/*
Ajouter (splice) à l'index 2 les valeurs d'un tableau
*/
let enPlus = ["brocolis", "kiwi", "banane"];
courses.splice(2,0,[enPlus]);
console.log(courses);

let enPlus2 = ["patates (100)", "frites"];
courses.splice(4,0,...enPlus2);
console.log(courses);

/*
Trier dans l'ordre lphabétique :
*/
courses.sort();
console.log(courses);

/*
Inverser l'ordre des cellules
*/
courses.reverse();
console.log(courses);

/*
Compter le nb d'éléments d'un tableau :
*/
console.log(courses.length);

/*
Récupérer l'index d'un élément du tableau :
*/
let indexOfPoisson = courses.indexOf("poisson");
console.log('indexOfPoisson : '+indexOfPoisson);

let chaineDeCaractere = "chaineDeCaractere";
console.log("chaineDeCaractere : "+chaineDeCaractere.charAt(2));

/*
Découper une chaine de caractère en fonction d'un caractère ou d'une chaine de caractère donnée
*/
let alphabet = "a,b,c,d,e,f,g,h";
let alphaArray = alphabet.split(', ');
console.log('alphabet : ',alphabet);
console.log('alphaArray : ',alphaArray);

/*
Créer une chaine de caractère à partir d'un tableau
*/
console.log(alphaArray.join('+ '));
let tabl4 = ["Bonjour",'tout','le','monde'];
console.log(tabl4.toString());
console.log(tabl4.join(' '));


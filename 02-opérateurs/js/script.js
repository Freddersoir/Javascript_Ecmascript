/*
    Les 3 opérateurs utilisés dans javascript :
        > Arithmétiques : +, -, *, ...
        > Comparaison : ==, ===, >, >=, <, <=, ...
        > Logiques : && (et), || (ou),
*/

let nb = 5;
let nb2 = 6;
let resultat = nb + nb2;
console.log(resultat);

let chaineDeCaractere = "ma chaine de caractères";
let resultat2 = chaineDeCaractere + resultat;
console.log(resultat2);
 
nb += 2;
console.log(nb);
nb = nb + 2;
console.log(nb);

nb --;
console.log(nb);
nb = nb - 1;
console.log(nb);

nb *= 2;
console.log("*=2" + nb);

nb /= 7;
console.log("/=7" +nb);

/*
    Le modulo permet d'obtenir le reste d'une division euclidienne

    7/2=3, il reste 1
*/
console.log("Modulo 7 / 2 : "+7%2);

/*
    Les comparateurs == et === 
*/
let cp1 = 5;
let cp2 = '5';

console.log(cp1 == cp2);

console.log(cp1 === cp2);

/*
    Les conditions 
*/
let b = 10;
b++;

if( b=== 10){
    console.log('b = 10');
}else{
    console.log('b != 10');
}

b++;
if( b === 10){
    console.log(" b strictement égale à 10");
}else if( b===11 ){
    console.log(" b strictement égale à 11");
}else{
    console.log(" b n'est ni égale à 10, ni à 11");
}

//    Les variables à tester en égalité strict :
switch(b){
    case 10:
        console.log(" b2 strictement égale à 10");
        break;
    case 11:
        console.log(" b2 strictement égale à 11");
        break;
    default:
        console.log(" b2 n'est ni égale à 10, ni à 11");
        break;
}

b++;
switch(b){
    default:
        console.log(" b3 n'est ni égale à 10, ni à 11");
        break;

    case 13:
        console.log(" /!\ b3 strictement égale à 13");
        break;
    case 11:
        console.log(" /!\ b3 strictement égale à 11");
        break;   
}

switch(true){
    case (b>10):
        console.log(" /!\ b3 strictement égale à 10");
        break;  
}

let c = true;
let d = 'truc';

if(c===true)
    if(d === 'truc')
        console.log(" c égale TRUE et d égale truc");

if(c===true){
    if(d === 'truc'){
        console.log(" c égale TRUE et d égale truc");
    }
}

//Compare puis incremente
let g = 10;
if(g++ === 10){
    console.log(g);
}

// Compare juste
if((g+1) === 12){
    console.log(g);
}

// Incrémenter puis compare
if(++g === 12){
    console.log("> "+g);
}"a" si nombre2 est égale à 3

/*
    Condition Ternaire / Affectation conditionnelle
*/

let v1 = 5;

(v1 >= 5)? console.log("V1") : console.log("V2");

// > en version if :
if(v1 >=5){
    console.log('V1');
}else{
    console.log('V2');
}

//Comparaison ? résultat si TRUE : résultat si False
let v2  = (v1 >=5)? v1 + 2 : v1 +3;
console.log(v2);

// > en version if :
let V2Bis;
if (v1 >=5){
    VBis = v1 + 2;
}else{
    VBis = v1 + 3;
}
console.log(VBis);




//Boucles
console.log("___________________While");
let index = 0;
while (index <= 10){
    console.log(index);
    index++;
}

console.log("_____________________While V2");
index = 0;
while(index++ <= 20){
    console.log(index);
}

console.log("_____________________Do While");
index = 11;
do{
    console.log("je rentre ici");
    index++;
}while(index <10);

console.log("_____________________Truc machin");
index = 11;
while(index <10){
    console.log("je rentre ici");
    index++;
}

console.log("---------Boucle FOR")

for(let i=0 ; i<10 ;i++){
    console.log(i);
}

//Autre facon d'écrire le for
let k = 0;
for(; k<10;){
    console.log("truc !!!");
    console.log(k);
    k++;
}
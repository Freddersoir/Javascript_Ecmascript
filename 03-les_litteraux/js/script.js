console.log("_____________________Concaténation__________")

let chaineDeCaractereN1 = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
let concatenation = 'Le Professeur a dit : "' +chaineDeCaractereN1+'"';
console.log(concatenation);

console.log("chaineDeCaractereN1 :" + chaineDeCaractereN1);
console.log("chaineDeCaractereN1 :" , chaineDeCaractereN1);

console.log(`Le Professeur a dit 2 : "${chaineDeCaractereN1}"`);
let line1 = "ceci";
let line2 = "est un";
let line3 = "teste";
let line4 = "sur plusieurs";
let line5 = "lignes";

console.log(`<ul>
                <li>${line1}</li>
                <li>${line2}</li>
                <li>${line3}</li>
                <li>${line4}</li>
                <li>${line5}</li>
            </ul>`);

let concat1 = line1 + 34 +4;
let concat2 = line1 + (34 +4);
console.log(concat1);
console.log(concat2);

//Exo

let welcome = 'Aujourd\'hui, il fait beau !'

let prenom = 'loic';
let message = prenom + '!' + welcome;

    //2ème facon identique de l'écrire

let messag2 = `${prenom}! ${message}`;
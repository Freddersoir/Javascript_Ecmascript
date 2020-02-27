/*
Un objet est comme une super variable qui peut contenir des variables et des fonctions.

    - Les variables seront des "Propriétés"
    - Les fonctions seront des "Méthodes"

*/

console.log('_____________Création d\'un objet_______________')

//Méthode n°1
let maVoiture = new Object();
maVoiture.couleur = "rouge";
maVoiture.modele = "Clio";
maVoiture.nbRoues = 4;
console.log('maVoiture : '+maVoiture);
console.log('maVoiture : ',maVoiture);
console.log('couleur de la voiture : '+maVoiture.couleur);


//Méthode n°2
let maSecondeVoiture = {
    couleur:"Bleu",
    modele:"Megane",
    nbRoues:4,
    radio:true,

    rouler:function(){  //C'est une méthode
        console.log("avance");
    }
};
console.log('maSecondeVoiture : ',maSecondeVoiture);
maSecondeVoiture.rouler();

console.log('maSecondeVoiture[\'radio\'] : ',maSecondeVoiture.radio);
console.log('maSecondeVoiture[\'radio\'] : ',maSecondeVoiture['radio']);



console.log('_____________Objet constructeur_______________')

function Person(lastName, firstName, city){

    //Propriété
    this.myLastName = lastName;
    this.myFirstName = firstName;
    this.myCity = city;

    //Méthode
    this.myNameIs = function(){
        return 'Hello, my name is '+this.myLastName + " " + this.myFirstName;
    }
    this.showCity = function(){
        return `I'm living in ${this.myCity}`;
    }
}

let marie = new Person("Marie", "MacDonald", "Nantes");
let paul = new Person("Paul", "WalterSmith", "Angers");

console.log('marie : ',marie);
console.log('paul : ',paul);
console.log(marie.myNameIs());
console.log(marie.showCity());
console.log(paul.myNameIs());
console.log(paul.showCity());


paul.likeToDance = true;
paul.doYouLikeToDance = function(){
    if(this.likeToDance){
        console.log('I love to dance the night');
    }else{
        console.log('I hate dancing');
    }    
}
paul.doYouLikeToDance();

marie.likeToDance = false;
//marie.doYouLikeToDance(); ==> Pas possible car seulement défini pour Paul

Person.prototype.doYouLikeToCook = function(){
    console.log(this.myLastName + 'love to cook !!');
}

paul.doYouLikeToCook();
marie.doYouLikeToCook();



console.log('_____________Comparaison d\'Objets_______________');

let julien = new Person('Julien', 'dupont', 'salanches');
let julien2 = new Person('Julien', 'dupont', 'salanches');

let homer1 = { nom:"Homer"};
let homer2 = { nom:"Homer"};

let homer3 = homer2;

console.log('Est ce que homer1 est identique à homer2 ? : '+ (homer1 == homer2));
console.log('Est ce que homer1 est identique à homer2 ? : '+ (homer1 === homer2));

console.log('Est ce que homer3 est identique à homer2 ? : '+ (homer3 === homer2));

console.log(JSON.stringify(homer1));
console.log(homer1);
console.log(JSON.stringify(homer2));
console.log(homer2);

console.log(JSON.stringify(homer2) == JSON.stringify(homer1));




console.log('_____________Hydratation de Person_______________');

let julienne = Object.assign(
    {
        sex:'female'
    },
    julien
)
julienne.myLastName = 'Julienne';

console.log('julien : ',julien);
console.log('julienne : ',julienne);



console.log('_____________Parcourir un objet_______________');
console.log('Parcour les propriétés de Julien :');

for (let property in julien){
    console.log('property : ',property);
    console.log('valeur : ',julien[property]);
}



console.log('_____________L\'Objet Date_______________');

let myDate = new Date();
console.log(myDate);

console.log(myDate.getFullYear());//Récupère l'année en cours

let dateLocale = myDate.toLocaleDateString();//affiche un string de la date du jour
console.log(dateLocale);

myDate.setDate(myDate.getDate()+1);//Modifie la date en lui disant +1 pour passer au lendemain
console.log(myDate);

let date2 = new Date(2020, 02, 24);//Affiche la date entrée dans les parenthèses
console.log(date2);





console.log('_____________L\'Objet Math_______________');

let pi = Math.PI;
console.log("pi = "+pi);

//un nb Aléatoire entre 0 et 1 => random
let aleatoir = Math.random();
console.log(aleatoir);

// si on veut décaler la virgule pour obtenir un nb entre 0 et 10
aleatoir *=10;
console.log(aleatoir);

let aleatoir2 = 5.56879;
console.log(Math.floor(aleatoir2));//le floor arrondi a l'entier inférieur
console.log(Math.round(aleatoir2));//le floor arrondi a l'entier supérieur

//Internationnalisation monétaire (modif devise)
const monnaie = 1234.345;
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(monnaie));

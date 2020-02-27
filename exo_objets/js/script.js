/*
Créer un Objet litteral avion ayant les propriétés suivantes :
    - nb d'ailes : 2
    - couleur : blanc
    - nb de roues : 3
    - une vitesse
    - une fonction permettant d'afficher dans la console sa vitesse
*/



let avion = {
    couleur:"Blanc",
    modele:"2 ailes",
    nbRoues:3,
    vitesse:50,

    voler:function(){  
        console.log(this.vitesse);
    }
};
console.log('avion : ',avion);
avion.voler();


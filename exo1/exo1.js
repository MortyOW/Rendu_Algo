function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class Personnage{
    constructor(sante,prenom){
        this.sante=sante;
        this.prenom=prenom;
    }
    
};

let liste = ["Anissa-Wejdene","z","zz","zzz","zzzz"]

class Trajet{
    constructor(feuxRouges,changements){
        this.feuxRouges=feuxRouges;
        this.changements=changements;
    }
}

let joueur = new Personnage(10,'John')

let trajetjoueur = new Trajet(30,0)

while (trajetjoueur.feuxRouges>0){
    musique = liste[getRandomInt(4)]
    console.log('tu écoutes '+musique)
    if (joueur.sante===0) {
        console.log('explosion')
        break
    }
    if (musique === "Anissa-Wejdene") {
        trajetjoueur.changements+=1
        console.log()
        joueur.sante-=1
    }
    trajetjoueur.feuxRouges-=1
    if (trajetjoueur.feuxRouges===0){
        console.log('Tu es arrivé à destination')
        break
    }
    
}
console.log('fin de partie')
console.log('tu as effectué '+trajetjoueur.changements+' changements')


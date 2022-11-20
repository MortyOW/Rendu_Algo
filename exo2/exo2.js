function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class Tueur{
    constructor(PV){
        this.PV=PV
    }
}

class Caractéristiques{
    constructor(noms,probabilitéMourir,probabilitéDegats,probabilitéMourirDegats){
        this.noms=noms;
        this.probabilitéMourir=probabilitéMourir;
        this.probabilitéDegats=probabilitéDegats;
        this.probabilitéMourirDegats=probabilitéMourirDegats;
    }
    
}

let noms = ['Tom','Pedro','Jacques','Thomas','Kevin','John','Pat']


function randomName(){
    let test =getRandomInt(noms.length-1)
    let b = noms[test]
    return b
}

let survivants = []
let morts=[]

for (let index = 0; index < 5; index++) {
    survivants.push(new Caractéristiques(randomName(),0.3,0.5,0.2))
}

let ElTuador = new Tueur(100)

while (ElTuador.PV>0 || survivants.length>0) {
    let randomNumber = Math.random()
    if (survivants.length==0) {
        console.log('les survivants sont morts')
        break
    }
    if (ElTuador.PV<=0) {
        console.log('le tueur est mort')
        break
    }
    for (let index = 0; index < survivants.length; index++) {
        if (randomNumber<survivants[index].probabilitéMourir) {
            console.log(survivants[index].noms+' est mort')
            morts.push(survivants[index].noms)
            survivants.splice(index,1)
        } else if (randomNumber<survivants[index].probabilitéDegats+survivants[index].probabilitéMourir) {
            console.log('Le tueur subit 10 degats de '+survivants[index].noms)
            ElTuador.PV-=10
            
        } else if (randomNumber<survivants[index].probabilitéDegats+survivants[index].probabilitéMourir+survivants[index].probabilitéMourirDegats){
            console.log('Le tueur subit 15 degats de'+survivants[index].noms+"mais celui ci meurt")
            ElTuador.PV-=15
            morts.push(survivants[index].noms)
            survivants.splice(index,1)
        }
    }
}
console.log('Liste des morts : ')
for (let index = 0; index < morts.length; index++) {
    console.log(morts[index]+' est mort');
    
}


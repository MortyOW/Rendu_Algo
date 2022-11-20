const board = document.querySelector('.checkerboard')
let i = 0;
for(let rows = 0; rows < 10; rows++) {
        for (let columns = 0; columns < 10; columns++) {

            let boxColor = (rows+columns) % 2 === 0 ? 'white' : 'black';

            const box = document.createElement('div')
          
            box.id = i 
            i++
            box.style.width = board.clientWidth / 10 + 'px'
            box.style.height = board.clientHeight / 10 + 'px'
            box.style.backgroundColor = boxColor;

            board.append(box);
            box.addEventListener('click',e=>{
                Move(e.target)
            })
        }
}
let blackPawns = []
let whitePawns = []
for (let square = 0; square < 39; square+=2) {
    if (square%10==0){
        square+=1
    } else if(square%10==1){
        square-=1
    }
    let a = document.getElementById(square)
    let b = document.createElement('div')
    b.classList.add('blackpawn')
    b.id = 'sqaure'+square
    b.addEventListener('click',e=>{
        Movement(e.target)
    })
    a.appendChild(b)
    blackPawns.push('a')
}



for (let square = 60; square < 99; square+=2) {
    if (square%10==0){
        square+=1
    } else if(square%10==1){
        square-=1
    }
    
    let a = document.getElementById(square)
    let b = document.createElement('div')
    b.classList.add('whitepawn')
    b.id = square
    b.addEventListener('click',e=>{
        Movement(e.target)
    })
    a.appendChild(b)
    whitePawns.push('a')
}


class Pawn{
    constructor(positionX, positionY){
        this.positionX = positionX
        this.positionY = positionY
    }
}

let turn = 0
let targetclass='whitepawn'

    if (turn===0) {
        targetclass = "whitepawn"
        turn = 1
    } else {
        targetclass = "blackpawn"
        turn = 0
    }


function convertIdToX(id){
    let y = Math.floor(id/10)
    let x = Math.floor(id%10)
    return [x,y]
}

function convertToId(x, y){
    return x+10*y
}

console.log(blackPawns.length)
console.log(whitePawns.length)

let a = 0
function Movement(e){
    if (e.classList.contains(targetclass)) {
        let coordinates = convertIdToX(e.id)
        console.log(coordinates)
        a=e
        e.remove()
        console.log(a)
    }
    Move(e)
    if (turn === 0) {
        targetclass = "blackpawn"
        turn = 1
    } else {
        targetclass = "whitepawn"
        turn = 0
    }
}

function Move(e){
    let move1=convertIdToX(e.id)
    let move2=convertIdToX(e.id)
    move1[0]=move1[0]+1,move1[1]-=1
    move2[0]=move2[0]-1,move2[1]-=1
    move1valide=convertToId(move1[0],move1[1])
    move2valide=convertToId(move2[0],move2[1])
    console.log('moves')
    console.log(move1,move2)
    try{
        if(a!=0){
            if (!move1valide.childNode || !move2valide.childNode) { 
                e.appendChild(a)
                a=0
            }
        }
    }catch{
        console.log('oue')
    }
}      

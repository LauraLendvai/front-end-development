function saberi(a,b) {
    return a+b
}



const a=5
const y=6

const z=saberi(a,y)
console.log(z)


function bacanjekocke() {
    const r=Math.random()
    const r1=r*6
    const r2=r1+1
    return Math.floor(r2)
}

console.log(bacanjekocke())
console.log(bacanjekocke())
console.log(bacanjekocke())
console.log(bacanjekocke())
console.log(bacanjekocke())
console.log(bacanjekocke())

function slucajniBro(donjaGranica, gornjaGranica) {
    const razlika=gornjaGranica-donjaGranica
    const r=Math.random()
    const broj=r*razlika+donjaGranica
    return Math.ceil(broj)
}
console.log(slucajniBro(10,30))
console.log(slucajniBro(10,30))
console.log(slucajniBro(10,30))
console.log(slucajniBro(10,30))
console.log(slucajniBro(10,30))

function cenaSaPorezom(cena, porez) {
    porez=porez>1? porez/100 : porez
    return cena=cena+cena*porez
}


console.log("cena sa porezom:", cenaSaPorezom(100,0.2))

function f2x2_5x_3(x) {
    return 2*x*x+5*x-3
}

console.log("fn - 5", f2x2_5x_3(-5))
console.log("fn 0", f2x2_5x_3(0))
console.log("fn  5", f2x2_5x_3(5))


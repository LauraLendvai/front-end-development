function bacanjekocke() {
    const r=Math.random()
    const r1=r*6
    const r2=r1+1
    return Math.floor(r2)
}

function kombinacijaSestK() {
    const kombinacija = []
    kombinacija.push(bacanjekocke())
    kombinacija.push(bacanjekocke())
    kombinacija.push(bacanjekocke())
    kombinacija.push(bacanjekocke())
    kombinacija.push(bacanjekocke())
    kombinacija.push(bacanjekocke())
    return kombinacija
}

console.log("yamb: ", kombinacijaSestK())


function cenaPorez (proizvod, porez) {
    const cena = proizvod.cena
    return cena + cena * porez 
}

const proizvod = {
    "naziv": "Cokolada",
    "cena": 100
}

console.log(cenaPorez(proizvod, 0.2))



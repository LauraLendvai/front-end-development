/*

let brojac=0
let broj=1
const nadjeni=[]


while (brojac<100) {
    if(broj % 3==0 && broj % 7==0) {
        nadjeni.push(broj)
        brojac++
    }
    broj++
}
console.log(nadjeni)
*/

const imena = ["ana", "marko", "goran", "zoran", "natalija"]
let nadjen=false

for (let ime of imena) {
    if (ime == "zoran") {
        nadjen = true
        break
    }
}
console.log("Pronadjen?", nadjen)


let brojac=0
let broj=1
const nadjeni=[]

while (brojac<100) {
    if(broj % 3!=0 || broj % 7!=0) {
        broj++
        continue
    }
    nadjeni.push(broj)
    brojac++
    broj++
}
console.log(nadjeni)

const osobe = [
    {"ime": "pera 1", "jmbg": 1234},
    {"ime": "pera 2", "jmbg": 2345},
    {"ime": "pera 3", "jmbg": 3456},
    {"ime": "pera 4", "jmbg": 4567},
    {"ime": "pera 5", "jmbg": 5678},
]

let osoba = null


for (let o of osobe) {
    if(o.jmbg==4567) {
        osoba = o
        break
    }
}


console.log(osoba)


// jpf 5/9 - 1:54 min
















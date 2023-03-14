/*

const a=5
const b=7

if(a>0) [
    console.log("a je pozizitivan broj")
]

if (a>b) {
    console.log("veca vrednost je a")
} else {
    if(a==b) {
        console.log("vrednosti su jednake")
    } else {
        console.log("vrednost b je veca")
    }
}

if(a>b){
    console.log("veca vrednost je a")
} else if(a==b) {
    console.log("vrednosti su jednake")
} else {
    console.log("vrednost b je veca")
}
*/
const ocena=3

if (ocena==1) {
    console.log("nedovoljan")
} else if (ocena==2) {
    console.log("dovoljan")
} else if (ocena==3) {
    console.log("dobar") 
} else if (ocena==4) {
    console.log("vrlo dobar")
} else if (ocena==5) {
    console.log("odlican")
} else {
    console.log("ocena mora biti izmedju 1 i 5")
}

const a=5
const b=5
const c=7

if (a>b) {
    if (a>c) {
        console.log(a)
    } else {
        console.log(c)
    } 
} else {
        if(b>c) {
            console.log(b)
    } else {
        console.log(c)
    }
}

if (a>b && a>c) {
    console.log(a)
} else if (b>a && b>c) {
    console.log(b)
} else {
    console.log(c)
}

const bodovi = 83

if (bodovi>=0 && bodovi<=50) {
    console.log("ocena 5")
} else if (bodovi>=51 && bodovi<=60) {
    console.log("ocena 6")
} else if (bodovi>=61 && bodovi<=70) {
    console.log("ocena 7")
} else if (bodovi>=71 && bodovi<=80) {
    console.log("ocena 8")
} else if (bodovi>=81 && bodovi<=90) {
    console.log("ocena 9")
} else if (bodovi>=91 && bodovi<=100) {
    console.log("ocena 10")
} else {
    console.log("poresan unos")
}                


const cena=100
const r = "CA"




function cenaPorez (cena, porez) {
        return cena + cena * porez 
}

if (r=="EU") {
    console.log(cenaPorez(cena, 0.7))
} else if (r=="UK") {
    console.log(cenaPorez(cena, 0.15))
} else if (r=="US" || r=="CA") {
    console.log(cenaPorez(cena, 0.13))    
} else if (r=="RS") {
    console.log(cenaPorez(cena, 0.20))
} else {
    console.log(cenaPorez(cena, 0.25))
}    

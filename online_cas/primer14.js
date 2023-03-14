const niz = [3,4,8,5,2,1]

for(let i=0; i<niz.length-1; i++) {
    for(let j=i+1; j<niz.length; j++) {
        if(niz[i]>niz[j]) {
            const tmp=niz[i]
            niz[i]=niz[j]
            niz[j]=tmp
    }
    }
}

    console.log(niz)


const automobili=[
    {"marka": "Automobil 1", "godina": 1997},
    {"marka": "Automobil 2", "godina": 2008},
    {"marka": "Automobil 3", "godina": 1995},
    {"marka": "Automobil 4", "godina": 2016},
    {"marka": "Automobil 5", "godina": 2018},
    {"marka": "Automobil 6", "godina": 2004}
]    

for (let i=0; i<automobili.length-1; i++) {
    for (let j=i+1; j<automobili.length; j++) {
        if(automobili[i].godina>automobili[j].godina) {
            const tmp=automobili[i]
            automobili[i]=automobili[j]
            automobili[j]=tmp
        }
    }
}
console.log(automobili)



const ocena = 4

switch (ocena) {
    case 1: {
        console.log("Nedovoljan")
        break
    }
    case 2: {
        console.log("dovoljan")
        break
    }
    case 3: {
        console.log("dobar")
        break
    }
    case 4: {
        console.log("vrlo dobar")
        break
    }
    case 5: {
        console.log("odlican")
        break
    }
default: {
    console.log("ocena mora biti o 1 do 5")
}
}


const mesec="januar"

switch(mesec) {
    case "januar": case "mart": case "maj": case "jul": case "avgust": case "oktobar": case "decembar": {
        console.log("Mesec ima 31 dan")
        break
    }
    case "februar": {
        console.log("Mesec ima 28/29 dana")
        break
    }
    case "april": case "jun": case "septembar": case "novembar": {
        console.log("Mesec ima 30 dana")
        break
    }
}





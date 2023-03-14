const nizBrojeva=[5,7,8,4,3,2]
const osoba = {
    "ime": "Petar",
    "prezime": "Petrovic",
    "godiste": 1995
}



for (let i=1; i<=10; i++) {
    console.log(i)
}


for (let broj of nizBrojeva) {
    console.log(broj)
}

for (let i=0; i<nizBrojeva.length; i++) {
    console.log(nizBrojeva[i])
}

for (let kljuc in osoba) {
    console.log(kljuc, ":", osoba[kljuc])
}
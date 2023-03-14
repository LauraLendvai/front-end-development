const nizBrojeva=[4,3,8,5,2,1]

// maksimalna vrednost

let max = nizBrojeva[0]

for (let i=1; i<nizBrojeva.length; i++) {
    if(max<nizBrojeva[i]) {
        max=nizBrojeva[i]
    }
}
console.log(max)

// suma brojeva

let suma=0

for(let broj of nizBrojeva) {
    suma=suma + broj
}
console.log(suma)

//filtriranje sadrzaja po nekom kriterijumu

const noviNiz=[]

for (let broj of nizBrojeva) {
    if(broj % 2==0) {
        noviNiz.push(broj)
    }
}
console.log(noviNiz.toString())



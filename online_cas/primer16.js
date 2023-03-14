const sada = new Date()

console.log(sada.getUTCMonth())

const d1 = new Date(2022,12,14,12,5,0,0)
console.log(d1)

function formatDateTime(date) {
    const dani = ["nedelja", "pondeljak", "utorak", "sreda", "cetvrtak", "petak", "subota"]


const i = date.getUTCDay()
console.log(dani[i])

const y=date.getUTCFullYear()
const m=date.getUTCMonth()+1
const d=date.getUTCDate()

console.log(y,m,d)

const hh=date.getUTCHours()+1
const mm = date.getUTCMinutes()

console.log(hh, mm)

return dani[i]+ ", " + d + "."+ m+ "."+y+". "+hh+":"+mm
}

console.log(formatDateTime(new Date()))


/* za dodavanje nule ispred minuta i sata ukoliko je jednocifreni br

hh = hh<10 ? "0" + hh : hh

mm = mm<10 ? "0" + mm : mm

*/





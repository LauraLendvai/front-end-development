function formatDateTime(date) {
    const dani = ["nedelja", "pondeljak", "utorak", "sreda", "cetvrtak", "petak", "subota"]


const milis = date.getTime()

const newDate = new Date(milis + 9*3600000)

const i = newDate.getUTCDay()

const d = newDate.getUTCDate()
const m = newDate.getUTCMonth()+1
const y = newDate.getUTCFullYear()

let hh = newDate.getUTCHours()
let mm = newDate.getUTCMinutes()

// sredjujemo datum i vreme

hh = hh < 10 ? "0" + hh : hh

mm = mm < 10 ? "0" + mm : mm

return dani[i]+ ", " + d + "."+ m+ "."+y+". "+hh+":"+mm

}

console.log(formatDateTime(new Date(2022,11,31,22,0,0,0)))
 
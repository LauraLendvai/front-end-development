const buttonKonvertuj = document.getElementById("konvertuj")

function konverzija() {
    const inputVrednost = document.getElementById("vrednost")
    const inputValutaIz = document.getElementById("valutaIz")
    const inputValutaU = document.getElementById("valutaU")

    const v = Number(inputVrednost.value)
    const valIz = inputValutaIz.value 
    const valU = inputValutaU.value 

    const valute = {
        "eur": 117.3201,
        "rsd": 1,
        "cad": 81.2437,
        "usd": 110.5420
    }

    const k = v * valute[valIz] / valute[valU]
    window.alert(valIz.toUpperCase() + " u " + valU.toUpperCase() + ": " + k)
}


buttonKonvertuj.onclick = konverzija
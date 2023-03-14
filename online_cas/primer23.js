const buttonKonvertuj = document.getElementById("konvertuj")

function konverzija() {
    const inputVrednost = document.getElementById("vrednost")
    const inputValutaIz = document.getElementById("valutaIz")
    const inputValutaU = document.getElementById("valutaU")

    const v = Number(inputVrednost.value)
    const valIz = inputValutaIz.value 
    const valU = inputValutaU.value 

    if(valIz == "eur" && valU=="rsd") {
        window.alert ("EUR to RDS: " + (v*117.3201))
    } else if (valIz == "rsd" && valU=="eur") {
        window.alert ("RDS to EUR: " + (v/117.3201))
    } else {
        window.alert ("Dozvoljene vrednosti za polja su eur i rsd")
    }    
}

buttonKonvertuj.onclick = konverzija


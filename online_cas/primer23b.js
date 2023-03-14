const buttonKonvertuj = document.getElementById("konvertuj")

function konverzija() {
    const inputVrednost = document.getElementById("vrednost")
    const rbKonverzijaEUR_RSD = document.getElementById("konverzijaEUR_RSD")
    

    const v = Number(inputVrednost.value)

    if (rbKonverzijaEUR_RSD.checked) {
        window.alert ("EUR u RDS: " + (v*117.3201))
    } else {
        window.alert ("RDS to EUR: " + (v/117.3201))
    }
 


}

buttonKonvertuj.onclick = konverzija
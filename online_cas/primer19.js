const liStil = document.getElementById("stil")
const liSadrzaj = document.getElementById("sadrzaj")
const buttonDugme = document.getElementById("dugme")


// I nacin

/*
liStil.style.color = "purple"
liStil.style.fontWeight = "bold"
liStil.style.fontSize = "30px"
*/

// II Nacin
liStil.style = "color: orange; font-size: 48px;"

//liSadrzaj.innerHTML = "zamenu <u>postojeceg sadrzaja novim</u>"
liSadrzaj.innerText = "zamenu <u>postojeceg sadrzaja novim</u>"

function kliknuto() {
    window.alert("zasto si me kliknuo? :(")
}

buttonDugme.onclick = kliknuto


const buttonPronadji=document.getElementById("pronadji")

function pretraga() {
    const liOsobe=document.getElementsByClassName("osoba")
    const inputIme=document.getElementById("ime")

    for(let liOsoba of liOsobe) {
        liOsoba.style.backgroundColor = null
    }

    for (let liOsoba of liOsobe) {
        if(liOsoba.innerText.startsWith(inputIme.value)) {
            liOsoba.style.backgroundColor = "yellow"
        }
    }
}

buttonPronadji.onclick=pretraga
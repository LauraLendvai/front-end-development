let BROJ = 5
const buttonPlus = document.getElementById("plus")
const buttonMinus = document.getElementById("minus")

function valuePlus(){
    BROJ ++
    const inputBroj = document.getElementById("broj")
    inputBroj.value = BROJ
}

function valueMinus() {
    if(BROJ > 0) {
        BROJ --
        const inputBroj = document.getElementById("broj")
        inputBroj.value = BROJ
    }
}

buttonPlus.onclick = valuePlus
buttonMinus.onclick = valueMinus


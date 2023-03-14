const buttonSuma = document.getElementById("suma")

function sumiranje() {
    const cbBrojevi = document.getElementsByName("broj")
    let suma = 0

    for(let cbBroj of cbBrojevi) {
        if(cbBroj.checked) {
            suma += Number(cbBroj.value)
        }
    }
    const spanRezultat = document.getElementById("rezultat")
    spanRezultat.innerText = suma
}

buttonSuma.onclick=sumiranje
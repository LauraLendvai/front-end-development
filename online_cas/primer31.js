let AKTIVNO_DUGME = null
const btnDugmad=document.getElementsByClassName("dugme")

// I nacin
/*

function clickEvent(event) {
    const btnDugmad=document.getElementsByClassName("dugme")

    for(let btnDugme of btnDugmad) {
        btnDugme.style.backgroundColor = null
    }

    event.target.style.backgroundColor = "orange"
}

*/

// II nacin


function clickEvent(event) {
    if(AKTIVNO_DUGME != null) {
        AKTIVNO_DUGME.style.backgroundColor = null
    }
     event.target.style.backgroundColor = "orange"
     AKTIVNO_DUGME = event.target
}

for(let btnDugme of btnDugmad) {
    btnDugme.onclick = clickEvent
}



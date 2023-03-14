function main() {
    const btnIncrement = document.getElementById("increase")

function clickEvent() {
    const spanCounter=document.getElementById("counter")
    const counter=Number(spanCounter.innerText)
    spanCounter.innerText=counter+1
}

btnIncrement.onclick=clickEvent
}

window.onload=main
const selectFruits=document.getElementById("fruits")

function chooseFruit(event) {
    const spanChosen=document.getElementById("chosen")
    spanChosen.innerText=event.target.value
}

selectFruits.onchange=chooseFruit

const inputText=document.getElementById("text")

function typeText(event) {
    const spanTyped = document.getElementById("typed")
    if(event.target.value.lenght == 0) {
        spanTyped.innerHTML = "<i style='color: grey'>Type something</i>"
    } else {
    spanTyped.innerText = event.target.value
    }
}

inputText.oninput=typeText


const cbCheck = document.getElementById("check")

function checkState(event) {
    spanState = document.getElementById("state")
    spanValue = document.getElementById("value")
    if(event.target.checked) {
        spanState.innerText = "on"
        spanValue.innerText = event.target.value
    } else {
        spanState.innerText="off"
        spanValue.innerText="-"
    }
}

cbCheck.onclick = checkState

const inputPercent = document.getElementById("percent")


function changeValue(event) {
    const spanRangeValue = document.getElementById("rangeValue")
    spanRangeValue.innerText = event.target.value

}

inputPercent.onmousemove=changeValue


const selectColor=document.getElementById("color")

function changeColor(event) {
    const divSquare=document.getElementById("square")
      
    divSquare.style.backgroundColor = event.target.value
}

selectColor.onchange=changeColor


















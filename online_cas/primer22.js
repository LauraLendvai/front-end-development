const buttonAdd =document.getElementById("add")
const buttonSubtract =document.getElementById("subtract")
const buttonMultiply =document.getElementById("multiply")
const buttonDivide =document.getElementById("divide")



function addEvent() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanResult = document.getElementById("result")

    const result=Number(inputX.value) + Number(inputY.value)
    spanResult.innerText = result

}

function subtractEvent() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanResult = document.getElementById("result")

    const result=Number(inputX.value) - Number(inputY.value)
    spanResult.innerText = result

}
function multiplyEvent() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanResult = document.getElementById("result")

    const result=Number(inputX.value) * Number(inputY.value)
    spanResult.innerText = result

}
function divideEvent() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanResult = document.getElementById("result")

    const result=Number(inputX.value) / Number(inputY.value)
    spanResult.innerText = result

}
buttonAdd.onclick = addEvent
buttonSubtract.onclick = subtractEvent
buttonMultiply.onclick = multiplyEvent
buttonDivide.onclick = divideEvent



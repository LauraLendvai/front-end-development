const buttonAdd =document.getElementById("add")
const buttonSubtract =document.getElementById("subtract")
const buttonMultiply =document.getElementById("multiply")
const buttonDivide =document.getElementById("divide")

function calculate (operation) {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanResult = document.getElementById("result")
    const x=Number(inputX.value)
    const y=Number(inputY.value)

    switch(operation) {
        case "+": {spanResult.innerText = x + y; break;}
        case "-": {spanResult.innerText = x - y; break;}
        case "*": {spanResult.innerText = x * y; break;}
        case "/": {spanResult.innerText = x / y; break;}
    }
}

function addEvent() {
    calculate("+")
}

buttonAdd.onclick = e=> calculate("+")
buttonSubtract.onclick = e=> calculate("-")
buttonMultiply.onclick = e=> calculate("*")
buttonDivide.onclick = e=> calculate("/")
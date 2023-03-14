const buttonShow = document.getElementById("show")
const buttonColor = document.getElementById("color")


function clickEvent() {
    const pMessage = document.getElementById("message")
    pMessage.innerText = "Knowledge is true vermeil in gold"
    
}

buttonShow.onclick = clickEvent


function colorMessage() {
    const pMessage = document.getElementById("message")
    pMessage.style.color="red"
}

buttonColor.onclick = colorMessage



// js 6/9 57 min
const divCanvas=document.getElementById("canvas")

function clickEvent() {
    const divOutput=document.getElementById("output")
    divOutput.innerHTML += "<p>Mouse click event</p>"

}

function mouseEnterEvent () {
    const divOutput=document.getElementById("output")
    divOutput.innerHTML += "<p>Mouse enter event</p>"
}

function mouseLeaverEvent () {
    const divOutput=document.getElementById("output")
    divOutput.innerHTML += "<p>Mouse leave event</p>"
}

function mouseDownEvent () {
    const divOutput=document.getElementById("output")
    divOutput.innerHTML += "<p>Mouse down event</p>"
}

function mouseUpEvent () {
    const divOutput=document.getElementById("output")
    divOutput.innerHTML += "<p>Mouse up event</p>"
}

function mouseDoubleEvent () {
    const divOutput=document.getElementById("output")
    divOutput.innerHTML += "<p>Mouse double click event</p>"
}    


function contextMenuEvent(event) {
    event.preventDefault()
    const divOutput=document.getElementById("output")
    divOutput.innerHTML += "<p>Context menu event</p>"
}

function mouseMoveEvent(event) {
    event.target.innerHTML="X: " + event.x + "Y: " + event.y
}


divCanvas.onclick=clickEvent
divCanvas.onmouseenter=mouseEnterEvent
divCanvas.onmouseleave=mouseLeaverEvent
divCanvas.onmousedown=mouseDownEvent
divCanvas.onmouseup =mouseUpEvent
divCanvas.ondblclick=mouseDoubleEvent
divCanvas.oncontextmenu=contextMenuEvent
divCanvas.onmousemove=mouseMoveEvent
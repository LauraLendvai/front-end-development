function focusEvent() {
    const now = new Date()
    const divLog=document.getElementById("log")
    divLog.innerHTML+= "<p><b style='color: green'>Focus:</b>" + now + "</P>"
}

function blurEvent() {
    const now = new Date()
    const divLog=document.getElementById("log")
    divLog.innerHTML+= "<p><b style='color: red'>Blur:</b>" + now + "</P>"
}

window.onfocus=focusEvent
window.onblur=blurEvent
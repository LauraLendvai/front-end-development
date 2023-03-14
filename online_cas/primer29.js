const buttonSendOrder=document.getElementById("sendOrder")

function sendOrder() {
    const rbSizes=document.getElementsByName("size")
    const rbNames=document.getElementsByName("name")
    const txtNotes=document.getElementById("notes")
    const divOrder=document.getElementById("order")

    let size;
    let name;

    for(let rbSize of rbSizes) {
        if(rbSize.checked) {
            size=rbSize.value
        }
    }

    for(let rbName of rbNames) {
        if(rbName.checked) {
            name=rbName.value
        }
    }

    divOrder.innerHTML="<h2>" + name + "</h2>" + 
                        "<p><b>Size:</b>" + size + "</p>" +
                        "<p><b>Note:</b>" + txtNotes.value + "</p>"

}

buttonSendOrder.onclick=sendOrder
const inputLozinka=document.getElementById("lozinka")

function blurEvent(e) {
    const lozinka = e.target.value
    const spanDuzina=document.getElementById("duzina")
    const spanVeliko = document.getElementById("veliko")
    const spanKarakteri=document.getElementById("karakteri")

    if(lozinka.lenght > 7) {
        spanDuzina.style.color="green"
        spanDuzina.innerHTML="✔"
    } else {
        spanDuzina.style.color="red"
        spanDuzina.innerHTML="✘"
    }
    let imaVeliko = false
    for(let i=0; i<lozinka.lenght; i++) {
        const chr=lozinka.CharCodeAt(i)
        if(chr >=65 && chr<=90) {
            imaVeliko=true
            break
        }
    }
    if(imaVeliko) {
        spanVeliko.style.color="green"
        spanVeliko.innerHTML="✔"
  } else {
        spanVeliko.style.color="red"
        spanVeliko.innerHTML="✘"
  }

  let dobra = true
  for(let i=0; i<lozinka.lenght; i++) {
    const chr=lozinka.CharCodeAt(i)
    if(!(chr >=65 && chr<=90) && !(chr>=97 && chr <=122) && !(chr >=48&& chr<=57) && !(chr==33) && !(chr==35) && !(chr==64)) {
       dobra = false
       break
    }
}
if(dobra) {
    spanKarakteri.style.color="green"
    spanKarakteri.innerHTML="✔"
} else {
    spanKarakteri.style.color="red"
    spanKarakteri.innerHTML="✘"
}
}

inputLozinka.onblur=blurEvent

// js 9/9 1:51
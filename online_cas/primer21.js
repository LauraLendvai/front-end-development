function getTimeString(date) {
    let hh = date.getUTCHours()
    let mm = date.getUTCMinutes()
    let ss = date.getUTCSeconds()

    hh = hh<10 ? "0" + hh : hh
    mm = mm<10 ? "0" + mm : mm
    ss = ss<10 ? "0" + ss : ss

    return hh + ":" + mm + ":" + ss

}

function shiftTime (date, hours) {
    const milis = date.getTime()
    const newTime = new Date(milis + hours*3600000)
    return newTime
}

function tickEvent() {
    const divClockLA = document.getElementById("clockLA")
    const divClockLON = document.getElementById("clockLON")
    const divClockBEI = document.getElementById("clockBEI")
    const divClockTY = document.getElementById("clockTY")

    const currentTime = new Date()
    const ctLA = shiftTime(currentTime, -8)
    const ctLON = currentTime
    const ctBEI = shiftTime(currentTime, 8)
    const ctTY = shiftTime(currentTime, 9)

    divClockLA.innerText = getTimeString(ctLA)
    divClockLON.innerText = getTimeString(ctLON)
    divClockBEI.innerText = getTimeString(ctBEI)
    divClockTY.innerText = getTimeString(ctTY)
}

setInterval(tickEvent, 1000)

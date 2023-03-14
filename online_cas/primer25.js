let ID_INTERVAL;
let TENTHS=0;
let SECONDS=0;
let MINUTES=0;


const buttonStart = document.getElementById("start")
const buttonStop = document.getElementById("stop")
const buttonReset = document.getElementById("reset")

function runTime() {
    const pStopwatch = document.getElementById("stopwatch")
    if(TENTHS==0) {
        TENTHS=0
        SECONDS++
    }
    if(SECONDS==60) {
        SECONDS=0
        MINUTES++
    }
    const seconds = SECONDS<10 ? "0" + SECONDS : SECONDS
    const minutes = MINUTES<10 ? "0" + MINUTES: MINUTES
    pStopwatch.innerText = minutes + ":" + seconds + ":" + TENTHS
    TENTHS++
}

function startStopwatch() {
    ID_INTERVAL=setInterval(runTime,100)
}

function stopStopwatch() {
    clearInterval(ID_INTERVAL)
}

function resetStopwatch() {
    TENTHS = 0
    SECONDS = 0
    MINUTES = 0
    const pStopwatch = document.getElementById("stopwatch")
    pStopwatch.innerText="00.00.00"
}

buttonStart.onclick = startStopwatch
buttonStop.onclick = stopStopwatch
buttonReset.onclick = resetStopwatch
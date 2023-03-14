const PLAYER = {
    "top":0,
    "left": 0,
    "width": 50,
    "height": 50
} 

const CONTAINER = {
    "width": 600,
    "height": 400
}

const ENEMY = {
    "top": 200,
    "left": 120,
    "widht": 25,
    "height":100,
    "movement": "up"
}

function enemyMove() {
    const divEnemy = document.getElementById("enemy")
    if(ENEMY.top>0 && ENEMY.movement == "up") {ENEMY.top -=2}
    else if ((ENEMY.top + ENEMY.height < CONTAINER.height) && (ENEMY.movement == "down")) {ENEMY.top +=2}
    else if (ENEMY.top == 0) {ENEMY.movement = "down"}
    else if (ENEMY.top + ENEMY.height == CONTAINER.height) {ENEMY.movement = "up"}
    divEnemy.style.top = ENEMY.top + "px"
    collisionDetection()
}

function collisionDetection() {
    if (
    PLAYER.left < ENEMY.left + ENEMY.widht &&
    PLAYER.left + PLAYER.width > ENEMY.left &&
    PLAYER.top < ENEMY.top + ENEMY.height &&
    PLAYER.top + PLAYER.height > ENEMY.top
    ) {
        const divBox=document.getElementById("box")
        PLAYER.left = 0
        PLAYER.top = 0
        divBox.style.top = PLAYER.top + "px"
        divBox.style.left = PLAYER.left + "px"
    }
}

function keyDownEvemt(e) {
    const spanPressed = document.getElementById("pressed")
    const divBox = document.getElementById("box")

    switch(e.keyCode) {
        case 37: {
            if (PLAYER.left>0) {PLAYER.left -=5}
            break
        }
        case 38: {
            if (PLAYER.top>0) {PLAYER.top -=5}
            break
        }
        case 39: {
            if(PLAYER.left+PLAYER.width<CONTAINER.width) {PLAYER.left+=5}
            break
        }
        case 40: {
            if(PLAYER.top+PLAYER.height<CONTAINER.height) {PLAYER.top+=5}
            break
        }
    } 
    collisionDetection()
    divBox.style.top = PLAYER.top + "px"
    divBox.style.left = PLAYER.left + "px"

}

window.onkeydown=keyDownEvemt
setInterval(enemyMove, 100)
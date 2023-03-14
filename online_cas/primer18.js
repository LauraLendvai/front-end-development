function hello(ime) {
    console.log("pozdrav " + ime)
}

function trenutniDatumVreme() {
    console.log(new Date())
}

// setTimeout(hello, 5000)

// setInterval(hello, 2000)

const ID = setInterval(e =>hello("Laura"), 2000)
const ID2 = setInterval(trenutniDatumVreme, 1000)

setTimeout(e=> clearInterval(ID) , 20000)
setTimeout(e=> clearInterval(ID2) , 20000)
 
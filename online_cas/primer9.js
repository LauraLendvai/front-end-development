const nizBrojeva=[6,7,8,1,2,3]

console.log(nizBrojeva[2])
console.log(nizBrojeva.length)

const n=nizBrojeva.length -1
console.log(nizBrojeva[n])
nizBrojeva.push(4)
nizBrojeva.unshift(5)
console.log("novi", nizBrojeva.toString())
console.log("novi", nizBrojeva.join(" * "))

nizBrojeva.pop()
console.log(nizBrojeva.toString())
nizBrojeva.shift()
console.log(nizBrojeva.toString())

nizBrojeva.splice(2,0,9,10)

console.log(nizBrojeva.toString())

nizBrojeva.splice(2,1)

console.log(nizBrojeva.toString())

const noviNiz = nizBrojeva.concat([11,12,13,14])
console.log(noviNiz)

// parola passata = 'Developer Full Stack School'

console.log('Hello Boolean')
console.log(process.argv)

const word = process.argv[2]
// const word = process.argv.slice(2) // recuperare in array i valori dall'indice 2 in poi (valori passati da noi)
console.log(`Hello ${word}`)

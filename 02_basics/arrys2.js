const  marvel_heros = ["thor" , "itonman" , "spiderman"]

const dc_hero = ["superman" , "flash" ," batman"]

// marvel_heros.push(dc_hero)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_hero)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_hero]
console.log(all_new_heros)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"})) //intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
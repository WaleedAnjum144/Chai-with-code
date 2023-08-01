// Singleton






// Objects Literals

const mySym = Symbol("key1")

const jsUser = {
    name :"Waleed",
    age: 26 ,
    [mySym]: "mykey1",
    location: "FSD" ,
    email:"waledd@gmail",
    isLoggin:false,
    lastDay: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])

jsUser.email = "waleedanjum23.com"
// Object.freeze(jsUser)

jsUser.email = "anotheremail"
// console.log( jsUser)


jsUser.greeting = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(jsUser.greeting())

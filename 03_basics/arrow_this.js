// // const user = {
// //     username : "Waleed",
// //     price : 999,

// //     welcomeMessage: function(){
// //         console.log(`${this.username} , welcome to my website`)
// //         // console.log(this)

// //     }
// }

// user.welcomeMessage()
// user.username= "Waleed Anjum"
// user.welcomeMessage()


// console.log(this)

// function chai(){

//     let username = "Waleed"
//     console.log(this.username)   //this key word only work in objects not function 
// }

// chai()


// const chai = () => {
//     let username = "Waleed Anjum"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1 , num2) => ({username:"Waleed Anjum"})

console.log(addTwo(3,4))

const myArray = [2,4,5,8]

// myArray.forEach(function (){})

// myArray.forEach(() => {})

// myArray.forEach(() => () )

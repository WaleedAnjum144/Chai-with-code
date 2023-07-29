// primitive and Non-primitive 

//#Primitive

// 7 types: String , Number Boolean , null , undefined,symbol,Bigint



const score = 100 

const scoreValue =  100.3 

const isLoggedIn = false 
const outsideTemp = null

let userEmail;

const id = Symbol ('123')

const anotherId = Symbol('123')

// console.log (id === anotherId)

const bigNumber = 245452424254n






// Reference (Non-Primitive)

//Array , Objects, Functions
//Array form
const heros = ["Imam Hussain" , "Khalid Bin Waleed", "Khizar" ];

// object Form 

let myObj = {
    name :"Waleed",
    age :22,
}

// functions 

const myFunction = function(){
    console.log("Hello World")
}

console.log( typeof id)



// ****************

// Stack memory(Primitive), Heaqp (non-Primitive)

let myYoutubeName = "Web_Reels";

let anothername = myYoutubeName
anothername = "Dev_Reels"

console.log(myYoutubeName);
console.log(anothername);

// Heap  Refference

let user1 ={
    email:"waleed@google.com",
    upi:"user@123"
}

let user2 = user1

user2.email = "wali@1234" 
console.log(user1.email);
console.log(user2.email);
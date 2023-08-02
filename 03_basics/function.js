function myName(){
    console.log("w");
    console.log("a");
    console.log("l");
    console.log("e");
    console.log("e");  
    console.log("d");

}

// myName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("Waleed Anjum")

    return number1 + number2
    
}

const result= addTwoNumber(4,5)
// console.log("Result: ", result)


function loginUserMessage(username= "Sam"){
    if(!username){
        console.log("Please Enter the username")
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("User2"))


function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,8000))

const user ={
    username : "Waleed Anjum",
    price:99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);

}

// handleObject(user)

handleObject({
    username:"Waleed Ansari",
    price:300
})

// array 


const myNewArray = [200,300,400,500]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500]))
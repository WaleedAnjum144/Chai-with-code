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

console.log(loginUserMessage("User2"))
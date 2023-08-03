// Out side the  is called global scope is present in the 
//block scop but block scop is not presen out side the block scope


let c = 300

if(true){
  
    const b =20       // under the curly braces the area is called block scope
    let c = 3330
    
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "Waleed"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }

    // console.log(website);
//     two()
// }

// one()


if (true){
    const username = "Waleed Anjum"
    if(username === "Waleed Anjum"){
        const website = "Youtube"
        // console.log(username + " " + website);
    }

    // console.log(website);
    
}
// console.log(username);

console.log(addone(5))   // Hoisting 
function addone(num){         // Simple declearation of function
    return num + 1 
}



const addtwo = function (num){  // function expression 
    return num + 2
}

// addtwo(5)



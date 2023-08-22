// const promiseFour = new Promise(function(resolve , reject){

//     //Do an async calls
//     //Db calls , Crptography , newtwork

//     setTimeout(function(){
//         console.log("async task is complte");
//         resolve()
//     }, 1000)



// })

// promiseFour.then(function(){
//     console.log("Promise Consumed")
// })

// new Promise (function(resolve,reject){
//     setTimeout(function(){
        
//         resolve({
//             username: "Chai" , email: "waleedanjum482@gmail.com"
//         })
        
//     },1000);
// }).then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        
    let error = true 
    if(!error){
        resolve({
            username: "Chai" , password: "123"
        })
    } else{
        reject('ERROR :sOMTHING WENT WRONG')
    }
        
    },1000)
})

promiseFour.then((user) =>{
    console.log(user)
    return user.username
}).then((username) =>{
console.log(username)
}).catch(function(error) {
    console.log(error)
})
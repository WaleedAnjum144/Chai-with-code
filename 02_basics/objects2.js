const tinderUser = new Object()
const regularUser = {
    email:"email@.com",
    fullname: {
        userName: {
            firstName:"Waleed",
            lastName:"Anjum"
        }
    }
}
// const firstName = regularUser.fullname.userName.firstName;
// const lastName = regularUser.fullname.userName.lastName;

// console.log(firstName + " " + lastName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

//const obj3 = {obj1 , obj2}

const obj3 = Object.assign({}, obj1,obj2)

// console.log(obj3);

const users = [
    {
        id: 1,
        email:"example@.com"
    },
    {
        id: 1,
        email:"example@.com"
    },
    {
        id: 1,
        email:"example@.com"
    },
    {
        id: 1,
        email:"example@.com"
    }
]



tinderUser.id ="12bc"
tinderUser.email = "sammy"
tinderUser.isLoggin = false


users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggin'))
//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreateDate = new Date(2023 , 0 , 23 , 5 ,3)
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())

let myTime = Date.now()

// console.log(myTime);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log (newDate);
console.log (newDate.getMonth());

newDate.toLocaleDateString('default',{
    weekday: "long"
  
})

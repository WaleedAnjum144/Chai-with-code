// immediately invoked function expressions (IIFE)

(function chai() {

    // name IIFE
    console.log (`Connnected`);
}) ();

((name) => {
    console.log(`Db connected ${name}`);
})('WALEED ANSARI')
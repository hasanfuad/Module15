// Swapping

let a = 7;
let b = 5;

console.log("A = "+a+"; B = "+b);

let temp = a;
    a = b;
    b = temp;

    console.log("A = "+a+"; B = "+b);


// Without temp 

let x = 5;
let y = 7;

x = x+y;

y = x-y;

x = x - y;

console.log(x+" "+ y);
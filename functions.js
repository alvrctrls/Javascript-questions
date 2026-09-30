/* 12.Explain the difference between a Function Declaration and a Function Expression. 
Specifically, how does "Hoisting" affect where these can be called in a script?

*Function Declaration is hoisted, so it can be called before it is written.
*Function Expression is not fully hoisted, has to be defined before called.*/


  
/* 13.Define the arguments object vs. the "Rest Parameter" (...args) syntax. 
Which is preferred in modern JavaScript and why?

 The arguments object stores all function arguments, while args collects 
them into an array, and args is preferred because it is cleaner and easier to use.

14. It stops the function call and it prints undefined. */

15. 
function multiply(a, b) {
    return a * b;
}
//as an arrow function.

const multiply = (a, b) => a * b;

16. //Function A is a nested function and B is the Parent function.

/*17. The Global Object (window in browsers, global in Node.js) 
 holds globally accessible variables and functions.
*/


//18. var is function scoped, while let and const are block-scoped

//19. when a local variable has the name of a global variable

//20.
let a = 10;
function outer() {
    let b = 20;
    if (true) {
        let a = 30;
        var c = 40;
        console.log(a + b); 
    }
    console.log(a);
    console.log(c);
}
outer();
//21. console prints 50,10,40
/*22. I think with let you get an error cause it is function scoped 
and needs to be declared before it is initialized. var prints undefined
cause it is already hoisted.
*/
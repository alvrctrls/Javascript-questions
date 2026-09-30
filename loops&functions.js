/*1. Truthy values act like true in a condition, while falsy values act like false. */

/**five falsy values:
    *false
    *0
    *"" (empty strings)
    *null
    *undefined
**/    


/*2. && stops when it finds a falsy value, while || stops when it finds a truthy value.*/

/*
3. === checks both value and type, while == JavaScript 
 automatically converts types before comparing them.
 === is recommended because it avoids unexpected comparisons caused 
by automatic type conversion.
*/

if (x == y && typeof x === "string") {
    console.log("Result A");
} else if (x === y || x > 0) {
    console.log("Result B");
} else {
    console.log("Result C");
}


/* 5. x == y is true because == converts "5" to 5, and typeof x === "string" is also true, 
so the && condition is true. */

/* 6. Rewrite a nested if...else structure using a single switch statement or a ternary operator, 
and explain when one is preferable over the other.  */


let age = 18;

switch (age) {
  case (age <=10):
    console.log("you are a small child");
    break;
  case (age >= 11):
    console.log("you are a teenager");
    break;
  default:
    console.log("you are old");

}

let differentAge = 20;
let result = differentAge >= 18 ? "Adult" : "Minor";

/* switch cases are better when multiple variables are considered while 
ternery operator is better for two variables or options being considered */

                  // ITERATION (For & While loops)

/*7. It is a condition that remains true throughout the loop, can make the lopp
infinite */


/* 8.Define the difference between the break and continue keywords. How do they 
affect the "counter" or "iterator" in a loop? */

/*break stops the entire loop, while continue skips the current iteration
 and moves to the next one. */

                      //Technical application

 /* 9.Write a for loop that iterates through an array of numbers but skips every 
 even number and stops entirely if it encounters a negative number.*/

 let numbers = [1, 3, 4, 7, 8, 9, -2, 11];
 for (let number of numbers) {
  if (number < 0) {
    break;
  }
  if (number % 2 === 0) {
    continue;
  }
  console.log(number);
}

 /*10,11. Code Tracing (Nested Loops): */

let count = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 3; j > i; j--) {
        count++;
    }
}
// it console logged 5.

/* 12.Provide a code example where a do...while loop would behave 
 differently than a standard while loop with the same condition.*/
 let x = 10;

while (x < 5) {
  console.log("not 10");
}

do {
  console.log("not 10");
} while (x < 5);

/* (while) will not run the code if it doesnt satisfy the variable
while (do while) will run the code even though it doesn't satisfy the variable.*/



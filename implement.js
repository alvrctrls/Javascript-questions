

                     //IMPLEMENTATION EXERCISES

//1.
let fullName = "Alvar Njaaga";
const age = 18;
var enrolled = true;

//2.
console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(enrolled, typeof enrolled);

//3.
let x = "5";
let y = 10;

console.log(x + y); // would give 510
console.log(x * y); // would give 50

//4.
let ticketAge = 20;

if (age < 5) {
  console.log("Free");
} 
else if (age <= 17) {
  console.log("Child discount");
}
 else if (age <= 64) {
  console.log("Full price");
} 
else if (age >= 64) {
  console.log("Senior discount");
}

//5.
let AccountBalance = 100000;
let account;
if (AccountBalance < 0){
    account = "Account Overdrawn"
}
else if (AccountBalance > 0){
    account = "Account Active"
}



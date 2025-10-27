

//String Manipulation Functions

let firstName;
let lastName;

function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return 'Invalid name input: Both first name and last name are required.';
    }else {
     firstName = capitalizeNames(firstName);
     lastName = capitalizeNames(lastName);
        return `${lastName},${firstName} `;
    }
}

function capitalizeNames(name) {
    return name
        .split(' ') //spliting name into array of letters
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) //capitalize first letter of each word
        .join(' '); //joining the letters back into name string
}

console.log(formatFullName('JULIE','moore')); // Output: "Moore, Julie"
console.log(formatFullName('brianna','GORDON'));

//Math Functions

let price;
let quantity;
let taxRate;

function calculateTotalCost(price, quantity, taxRate){
    if (price < 0 || !price || quantity < 0|| !quantity || taxRate < 0 || !taxRate) {
        return 'Invalid input: Price, quantity, and tax rate must be present and more than 0.';
    } else {
        const subtotal = price * quantity; // calculating subtotal for items 
        const taxAmount = subtotal * (taxRate / 100); // calculating tax amount
        const totalCost = subtotal + taxAmount; // calculating total cost including tax
        return totalCost.toFixed(2); //returning total cost rounded to 2 decimal places
    }
}
console.log(calculateTotalCost(5,3,7.8)); 

//Function with Conditional Logic

//Declaration of variables
let age;
let isEmployed;
let eligibleAge = 18;
 
// Define functions

function checkEligibility(age, isEmployed){
   if (age < eligibleAge){
         return 'Not eligible: Must be at least 18 years old.';
   }else if (age >= eligibleAge && !isEmployed){
            return 'conditonally eligible.';
   }else{
            return 'Eligible.';
   }
}
// Invoke the function
console.log(checkEligibility(20,true)); // Output: "Eligible."
console.log(checkEligibility(16,true)); // Output: "Not eligible: Must be at least 18 years old."
console.log(checkEligibility(22,false)); // Output: "Conditionally eligible."
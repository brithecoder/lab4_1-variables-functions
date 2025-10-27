

// Task 1: String Manipulation Function

// declare variables
let firstName;
let lastName;

// define function
function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return 'Invalid name input: Both first name and last name are required.';
    }else {
     firstName = capitalizeNames(firstName);
     lastName = capitalizeNames(lastName);
        return `${lastName},${firstName} `;
    }
}
//function to capitalize names
function capitalizeNames(name) {
    return name
        .split(' ') //spliting name into array of letters
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) //capitalize first letter of each word
        .join(' '); //joining the letters back into name string
}
//invoke the function
console.log(formatFullName('JULIE','moore')); // Output: "Moore, Julie"
console.log(formatFullName('brianna','GORDON')); // Output: "Gordon, Brianna"

// Task 2: Math Functions

//Declaration of variables
let price;
let quantity;
let taxRate;

//Define function
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
//Invoke the function
console.log(calculateTotalCost(5,3,7.8)); 

// Task 3: Function with Conditional Logic

//Declaration of variables
let age;
let isEmployed;
let eligibleAge = 18;
 
// Define functions
function checkEligibility(age, isEmployed){
   if (age < eligibleAge){
         return 'Not eligible: Must be at least 18 years old.'; //checking age condition
   }else if (age >= eligibleAge && !isEmployed){ 
            return 'conditonally eligible.';  //checking employment condition
   }else{
            return 'Eligible.'; //if both conditions are met
   }
}
// Invoke the function
console.log(checkEligibility(20,true)); // Output: "Eligible."
console.log(checkEligibility(16,true)); // Output: "Not eligible: Must be at least 18 years old."
console.log(checkEligibility(22,false)); // Output: "Conditionally eligible."


//Task 4: Refactoring for Reusability

//decaration of variables
let discountRate;

//define function
function totalCostWithDiscount(price, quantity, taxRate, discountRate){
    if(!discountRate || discountRate <= 0){
        return calculateTotalCost(price,quantity,taxRate);
}else {
        const totalCost = price * quantity; // calculating total cost before discount and tax
        const totalCostWithDiscount = totalCost - (totalCost * (discountRate / 100)); // applying discount
        const taxAmount = totalCostWithDiscount * (taxRate / 100); // calculating tax on discounted amount
        const finalCost = totalCostWithDiscount + taxAmount; // calculating final cost including tax
        return finalCost.toFixed(2);
    }
}
//Invoke the function 
  console.log((totalCostWithDiscount(5,3,7.8,10))); // Output: Total cost with 10% discount
  console.log((totalCostWithDiscount(5,3,7.8))); // Output: Total cost without discount using calculateTotalCost function

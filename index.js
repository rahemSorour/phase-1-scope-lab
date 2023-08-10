
var customerName = 'bob';
const leastFavoriteCustomer = 'someone';

// Write a function to uppercase the global customerName variable
function upperCaseCustomerName() {
   return  customerName = customerName.toUpperCase();  
}


// Write a function to set the bestCustomer variable
function setBestCustomer() {
    bestCustomer = 'not bob';
}


// Write a function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  return bestCustomer = 'maybe bob';
}


// Write a function to attempt changing the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer ='newval';
}


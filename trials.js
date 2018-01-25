// ///////////////////////////////////////////////////////
// PART 1
// Account information:

"use strict";

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

phoneNumbers.set('Home', '510-867-5309')
            .set('Mobile', '415-555-1212')
            .set('Business', '415-123-4567');

const startingBalance = 26000;

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information

function printInfo(accountHolder, accountNumber, businessName) {
    // console.log("Account Holder Name: " + accountHolder);
    // console.log("Account Holder Number: " + accountNumber);
    // console.log("Business Name: " + businessName);
    console.log(`Account Holder Name: ${accountHolder}`);
    console.log(`Account Holder Number: ${accountNumber}`);
    console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header

function showAddresses(addresses) {
    console.log("Addresses:");

    for(let address of aStartddresses) {
        console.log(address);
    }
}


// Add function to print phone types and numbers

function showPhones (phoneNumbers) {
    // body...

    console.log("Phone Numbers:");

    for (let [k, v] of phoneNumbers) {
        console.log(k + ": " + v);
    }

}


// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
const transactions = new Map([
    ['May-2', -500],
    ['May-13', 1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', 2200]
    ]);


// Add function to add transactions

function addTransaction(date, amount) {
    transactions.set(date, amount);
}


// Add function to show balance status

function showBalanceStatus(amount) {
    if (amount < 0) {
        console.log("You are overdrawn");
    } else if (amount > 0 && amount < 20) {
        console.log("Warning: You are close to zero balance.");
    } else {
        console.log("Thank you for your business.");
    }
}

// Add function to show transactions

function showTransactions(transactions, beginningBalance) {
    console.log(beginningBalance);
    let balance = beginningBalance;
    for (let tr of transactions) {
        let date = tr[0];
        let type;
        if (tr[1] < 0) {
            type = 'Withdrawal';
        } else {
            type = 'Deposit';
        }
        let amountChanged = tr[1];
        if (balance < 0) {
            addTransaction('May-30', -25);
        }
        balance = beginningBalance + amountChanged;

        console.log(date, type, amountChanged, balance);
    }
    console.log("Remaining balance: " + balance);
    showBalanceStatus(balance);

}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info
let customers = new Map()

customers.set("Account Holder", accountHolder);
customers.set("Account Number", accountNumber);
customers.set("Business Name", businessName);
customers.set("Addresses", addresses);
customers.set("Phone Numbers", phoneNumbers);
customers.set("Transactions", transactions);
customers.set("Starting Balance", startingBalance);


// Function to add customer attributes

function addCustomerAttributes(favMelon='Canteloupe',pets=0) {
    customers.set('Favorite Melon', favMelon);
    customers.set('Number Pets', pets);
}


// ///////////////////////////////////////////////////////
// Getting a Business Loan
function getBusinessLoan(income, customers) {
    let favMelon = customers.get('Favorite Melon');
    let numPets = customers.get('Number Pets');

    let preferredCustomer = false;

    if (favMelon == "Casaba" | numPets > 5) {
        preferredCustomer = true;
    }

    let rate;
    if (income < 100000) {
        if (preferredCustomer) {
            rate = 5;
        } else {
            rate = 8;
        }
    } else if (income > 100000 && income < 200000) {
        if (preferredCustomer) {
            rate = 4;
        } else {
            rate = 7;
        }
    } else {
        rate = 4;
    }

    console.log("Your interest rate is " + rate + "%");
}


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report

// function accountreport(customers) {

//     console.log(customers.get)

// }

// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
let custAddresses = new Map([
    ['Mel Melitipolski', '707 Birch Street'],
    ['Barabara Brown', '8997 Jones Street']
    ]);


// Write a function to return the address of a given person
function returnAddress(person) {
    return custAddresses.get(person);
}


// Add a function to create an employee schedule for the week
function assignSchedule(names) {
    let days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];

    let scheduleMap = new Map();

    for (var i=0; i<7; i++) {
       // let randomDay = Math.floor(Math.random() * 7);
       let randomPerson = Math.floor(Math.random() * names.length);
       scheduleMap.set(days[i], names[randomPerson]);
    }

    return scheduleMap;
}

assignSchedule(['Becky', 'Tom', 'Ryan'])


// Add a function for weekly hours
function weeklyHours() {

    let bankHours = new Set();

    for (var i=0; i<7; i++) {

    }


}







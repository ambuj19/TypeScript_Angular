"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function start() {
    console.log("Welcome to Axix Bank");
    console.log("1. Open Saving or Current Account");
    console.log("2. View Balance");
    console.log("3. View Customer Data");
    console.log("4. Withdrawl Money");
    console.log("5. Exit");
}
start();
var userChoice = 0;
var option = 0;
var stdin = process.openStdin();
var abc = process.openStdin();
stdin.addListener("data", function (d) {
    console.log("you entered: [" + d.toString().trim() + "]");
    option = Number.parseInt(d.toString());
    if (option === 1) {
        console.log("1. Saving");
        console.log("2. Current");
        console.log("Select 1 or 2");
        abc.addListener("data", function (e) {
            console.log("you entered: [" + e.toString().trim() + "]");
            userChoice = Number.parseInt(e.toString());
            if (userChoice === 1) {
                var data = new SavingBank();
                data.Saving();
            }
            else {
                var currentdata = new CurrentBank();
                currentdata.Current();
            }
        });
    }
    else if (option === 3) {
        var a1 = new accountdata();
        a1.data();
    }
    else if (option === 2) {
        var name_1 = (0, readline_sync_1.question)("Enter your name:\n");
        if (customerData.customerName == "Ambuj" && name_1 == "Ambuj") {
            console.log(customerData.balance);
        }
        else {
            console.log("No data to show");
        }
    }
    else if (option === 4) {
        // let a2 =new SavingBank();
        // a2.withdraw();
        var withdrawaccountnumber = ((0, readline_sync_1.question)("Enter the Account number"));
        if (withdrawaccountnumber == 'Sav11111') {
            var withdrAwamount = parseInt((0, readline_sync_1.question)("Enter the amount to withdraw :"));
            if (withdrAwamount > customerData.balance) {
                console.log("Insufficient Balance");
            }
            else {
                var remaningbalance = customerData.balance - withdrAwamount;
                console.log(remaningbalance);
                start();
            }
        }
    }
});
var SavingBank = /** @class */ (function () {
    function SavingBank() {
    }
    SavingBank.prototype.Saving = function () {
        var first = (0, readline_sync_1.question)("Enter your name:\n");
        var age = (0, readline_sync_1.question)("Enter your Age:\n");
        var location = (0, readline_sync_1.question)("Enter your Location:\n");
        var state = (0, readline_sync_1.question)("Enter your State:\n");
        var couuntry = (0, readline_sync_1.question)("Enter your Country:\n");
        var email = (0, readline_sync_1.question)("Enter your Email:\n");
        var em = validateEmail(email);
        var ages = checkage(age);
        console.log(first, ages, location, state, couuntry, em);
        if (em != undefined && age != undefined) {
            console.log('Your Account Number is  svv', Math.floor(Math.random() * 30000) + 2000);
            var amou = (0, readline_sync_1.question)("Enter amount to deposit: \n");
            var amount = validatemoneysav(amou);
        }
    };
    SavingBank.prototype.withdraw = function () {
        var withdrAwamount = parseInt((0, readline_sync_1.question)("Enter the amount to withdraw"));
    };
    return SavingBank;
}());
var CurrentBank = /** @class */ (function () {
    function CurrentBank() {
    }
    CurrentBank.prototype.Current = function () {
        var first = (0, readline_sync_1.question)("Enter your name:\n");
        var age = (0, readline_sync_1.question)("Enter your Age:\n");
        var location = (0, readline_sync_1.question)("Enter your Location:\n");
        var state = (0, readline_sync_1.question)("Enter your State:\n");
        var couuntry = (0, readline_sync_1.question)("Enter your Country:\n");
        var email = (0, readline_sync_1.question)("Enter your Email:\n");
        var em = validateEmail(email);
        var ages = checkage(age);
        console.log(first, ages, location, state, couuntry, em);
        if (em != undefined && age != undefined) {
            console.log('Your Account Number is Crr', Math.floor(Math.random() * 30000) + 2000);
            var amou = (0, readline_sync_1.question)("Enter amount to deposit: \n");
            var amount = validatemoneycurr(amou);
        }
    };
    return CurrentBank;
}());
function CustomerDetail(display) {
    var option = "Name - ".concat(display.customerName, ": Age - ").concat(display.age, ": Location - ").concat(display.location, ": state - ").concat(display.state, ": Country - ").concat(display.country, ": EmailId - ").concat(display.emailId, ": AccountNumber - ").concat(display.accountNumber, ": Balance - ").concat(display.balance);
    var newOption = option.split(":").join('\n');
    console.log(newOption);
}
var customerData = {
    customerName: 'Ambuj',
    age: 24,
    location: 'Varanasi',
    state: 'Uttar Pradesh',
    country: 'India',
    emailId: 'ambuj@gmail.com',
    accountNumber: 'Sav11111',
    balance: 1000
};
var accountdata = /** @class */ (function () {
    function accountdata() {
    }
    accountdata.prototype.data = function () {
        var customerData = {
            customerName: 'Ambuj',
            age: 24,
            location: 'Varanasi',
            state: 'Uttar Pradesh',
            country: 'India',
            emailId: 'ambuj@gmail.com',
            accountNumber: 'Sav11111',
            balance: 1000
        };
        CustomerDetail(customerData);
    };
    return accountdata;
}());
// function isNumber(str:string):boolean{
// const maybenum=parseInt(str)
// const isnum:boolean=!isNaN(maybenum)
// return isnum;
// }
function checkage(stm) {
    var maybenum = parseInt(stm);
    if (maybenum > 68) {
        console.log("Enter below 68 age");
    }
    else {
        return maybenum;
    }
}
function validateEmail(emails) {
    var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regularExpression.test(String(emails).toLowerCase()) == false) {
        console.log("Invalid email");
    }
    else {
        return emails;
    }
}
function validatemoneysav(amounts) {
    var money = parseInt(amounts);
    if (money < 500) {
        console.log("Amount should be greater than 500");
    }
    else {
        console.log("Money deposited :" + money);
    }
}
function validatemoneycurr(amounts) {
    var money = parseInt(amounts);
    if (money < 1000) {
        console.log("Amount should be greater than 500");
    }
    else {
        console.log("Money deposited :" + money);
    }
}

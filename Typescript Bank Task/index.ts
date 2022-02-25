import { question } from 'readline-sync'
function start(){
console.log("Welcome to Axix Bank");
console.log("1. Open Saving or Current Account");
console.log("2. View Balance");
console.log("3. View Customer Data")
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
                let data = new SavingBank();
                data.Saving();

            } else {
                let currentdata = new CurrentBank();
                currentdata.Current();
            }

        });

    }else if(option===3){
        let a1=new accountdata()
        a1.data();
    }else if(option===2){
        const name: string = question("Enter your name:\n");
        if(customerData.customerName=="Ambuj" && name=="Ambuj"){
      console.log(customerData.balance);
        
        }else{
            console.log("No data to show");
        } 
    }else if(option===4){
        // let a2 =new SavingBank();
        // a2.withdraw();
        var withdrawaccountnumber= (question("Enter the Account number"));
       
        if(withdrawaccountnumber=='Sav11111'){
            var withdrAwamount= parseInt(question("Enter the amount to withdraw :"));
            if(withdrAwamount>customerData.balance){
                console.log("Insufficient Balance")
            }else{
               var remaningbalance= customerData.balance - withdrAwamount;
               console.log(remaningbalance);
               start();
            }
        }
    }


});


class SavingBank {
 
    Saving() {

        const first: string = question("Enter your name:\n");

        const age: string = question("Enter your Age:\n");

        const location: string = question("Enter your Location:\n");

        const state: string = question("Enter your State:\n");

        const couuntry: string = question("Enter your Country:\n");

        const email: string = question("Enter your Email:\n");
        const em = validateEmail(email)

        const ages = checkage(age)
        console.log(first, ages, location, state, couuntry, em);
        if (em != undefined && age != undefined) {
            console.log ('Your Account Number is  svv',Math.floor(Math.random()*30000)+2000);
            var amou: string = question("Enter amount to deposit: \n");
            var amount = validatemoneysav(amou)
        }


    }
    
}
class CurrentBank {
    Current() {

        const first: string = question("Enter your name:\n");

        const age: string = question("Enter your Age:\n");

        const location: string = question("Enter your Location:\n");

        const state: string = question("Enter your State:\n");

        const couuntry: string = question("Enter your Country:\n");

        const email: string = question("Enter your Email:\n");
        const em = validateEmail(email)

        const ages = checkage(age)
        console.log(first, ages, location, state, couuntry, em);
        if (em != undefined && age != undefined) {
            console.log ('Your Account Number is Crr',Math.floor(Math.random()*30000)+2000);
            const amou: string = question("Enter amount to deposit: \n");
            const amount = validatemoneycurr(amou)
        }
    }
}
interface CustomerData {

    customerName: string;

    age: number;

    location: string;

    state: string;

    country: string;

    emailId: string;

    accountNumber: string;

    balance: number;

}
function CustomerDetail(display?: CustomerData) {

    let option = `Name - ${display.customerName}: Age - ${display.age}: Location - ${display.location}: state - ${display.state}: Country - ${display.country}: EmailId - ${display.emailId}: AccountNumber - ${display.accountNumber}: Balance - ${display.balance}`;



    var newOption = option.split(":").join('\n');

    console.log(newOption);

}
let customerData = {

    customerName: 'Ambuj',

    age: 24,

    location: 'Varanasi',

    state: 'Uttar Pradesh',

    country: 'India',

    emailId: 'ambuj@gmail.com',

    accountNumber: 'Sav11111',

    balance: 1000

}
class accountdata {
    data() {

        let customerData = {

            customerName: 'Ambuj',

            age: 24,

            location: 'Varanasi',

            state: 'Uttar Pradesh',

            country: 'India',

            emailId: 'ambuj@gmail.com',

            accountNumber: 'Sav11111',

            balance: 1000

        }
        CustomerDetail(customerData);
    }
}
// function isNumber(str:string):boolean{
// const maybenum=parseInt(str)
// const isnum:boolean=!isNaN(maybenum)
// return isnum;
// }
function checkage(stm: string) {
    const maybenum = parseInt(stm)
    if (maybenum > 68) {
        console.log("Enter below 68 age");
    } else {
        return maybenum;
    }
}
function validateEmail(emails: string) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regularExpression.test(String(emails).toLowerCase()) == false) {
        console.log("Invalid email")
    } else {
        return emails;
    }

}
function validatemoneysav(amounts: string) {
    const money = parseInt(amounts)
    if (money < 500) {
        console.log("Amount should be greater than 500")
    } else {
        console.log("Money deposited :" + money)
    }

}
function validatemoneycurr(amounts: string) {
    const money = parseInt(amounts)
    if (money < 1000) {
        console.log("Amount should be greater than 500")
    } else {
        console.log("Money deposited :" + money)
    }

}
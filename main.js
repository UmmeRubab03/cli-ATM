#! /usr/bin/env node
import inquirer from "inquirer";
// 1) firstly decide a balance
let currentBalance = 20000;
// 2) create a authentic pincode
let pinCode = 3007;
// 3) create an object to take pin code from user
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your valid pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin code!!");
    // 4) create one more object to take operation input from user    
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        }
    ]);
    // 5) If the user will select withdraw,then ask the amount from user
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "list",
                choices: ["5000", "8000", "10000", "15000", "20000"],
            }
        ]);
        currentBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${currentBalance}`);
    }
    // 6)if the user will select check balance and not withdraw
    else if (operationAns.operation === "check balance") {
        console.log(`Your current balance is:  ${currentBalance}`);
    }
}
else {
    console.log("Incorrect pin code!!");
}

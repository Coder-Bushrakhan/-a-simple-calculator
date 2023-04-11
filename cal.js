#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
async function run() {
    const answer = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter First Number:",
            prefix: ">>"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Second Number:",
            prefix: ">>"
        },
        {
            name: "operator",
            type: "list",
            message: "Enter Operator:",
            choices: ["+", "-", "*", "/", "%", "^"],
            prefix: ">>",
        }
    ]);
    const num1 = Number(answer.num1);
    const num2 = Number(answer.num2);
    let result;
    if (answer.operator == "+") {
        result = num1 + num2;
    }
    else if (answer.operator == "-") {
        result = num1 - num2;
    }
    else if (answer.operator == "*") {
        result = num1 * num2;
    }
    else if (answer.operator == "/") {
        result = num1 / num2;
    }
    else if (answer.operator == "%") {
        result = num1 % num2;
    }
    else if (answer.operator == "^") {
        result = num1 ** num2;
    }
    console.log(chalk.green(`Your Answer is ${result}`));
}
run();

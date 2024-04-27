#!/usr/bin/env node

// This line is called a shebang, it let the os to run it with nodejs

// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer"

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])

const words =  answers.sentence.trim().split(" ")

//  Print the array of word to the console
console.log(words)

//  Print the words count of the sentence to the console
console.log(`Your sentence words count is ${words.length}`);

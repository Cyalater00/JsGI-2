// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min(x,y){
    return x - y ;
}
console.log (min(10,2));


// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."


const students = [
    {firstName: 'Mike', lastName: 'Onwuka', age: 21},
    {firstName: 'John', lastName: 'Doe', age: 22},
    {firstName: 'Billy', lastName: 'Jacobs', age: 23},
];

console.log(`Hello, my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old.`);


// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let monthNumber = Number(prompt("Enter a number from 1-12"));

function month(monthNumber){
    if (monthNumber === 1){
        console.log("January");

    }else if (monthNumber === 2){
        console.log("Feburary");

    }else if (monthNumber === 3){
        console.log("March");

    }else if (monthNumber === 4){
        console.log("April");

    }else if (monthNumber === 5){
        console.log("May");

    }else if (monthNumber === 6){
        console.log("June");

    }else if (monthNumber === 7){
        console.log("July");

    }else if (monthNumber === 8){
        console.log("August");

    }else if (monthNumber === 9){
        console.log("September");

    }else if (monthNumber === 10){
        console.log("October");

    }else if (monthNumber === 11){
        console.log("November");

    }else if (monthNumber === 12){
        console.log("December");

    }else{
        console.log("Invalid check number");

    }
 }    

month(monthNumber);





/* HARD: Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 g
Jerry - 	height: 10in 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    Mass= 
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).*/


 let heightTom = 9;
 let heightJerry = 10;
 let massTom = 8;
 let massJerry = 45;

let BMITom = massTom / heightTom ** 2;
let BMIJerry = massJerry / (heightJerry * heightJerry);
let tomHigher = BMITom > BMIJerry;
console.log(BMITom, BMIJerry);

if(BMITom > BMIJerry){
    console.log(`Tom's BMI (${BMITom}) is higher than Jerry's (${BMIJerry})`)
} else{
    console.log(`Jerry's BMI (${BMIJerry}) is higher than Tom's (${BMITom})`)
}
console.log(BMITom, BMIJerry, tomHigher);



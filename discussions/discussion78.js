/*
Write a closure where the higher-order function takes a number num and returns an anonymous function with a parameter i. The anonymous inner function logs the product of num * i to the console. Call the higher order function and store the returned anonymous function in a variable printTableItem using a function expression.

Call printTableItem in a loop from 1 to 10 to print the table of 13.
*/


function printNumber(num){
    return function(index){
        console.log(num * index)
    }
}

let number = 13;
let printTableItem = printNumber(number)

for(let i = 1; i <= 10; i++){
    printTableItem(i);
}
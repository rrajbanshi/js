/*The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation
Fn = Fn-1 + Fn-2
with seed values
F0 = 0 and F1 = 1.
1) WAP to print the first n terms of the Fibonacci sequence.*/

function Fibonacci(n){
    if(n == 1 || n == 0){
        return n;
    }
    let res = Fibonacci(n - 1) + Fibonacci(n - 2);
    return res;
    
}

let num = +prompt("Enter the number: ")

for(let i = 0; i <= num; i++){
    console.log(Fibonacci(i))
}




// 2)WAP to print the Fibonacci sequence till a given number n.

function Fibonacci(n){
    if(n == 1 || n == 0){
        return n;
    }
    let res = Fibonacci(n - 1) + Fibonacci(n - 2);
    return res;
    
}

let num1 = +prompt("Enter start index")
let num2 = +prompt("Enter end index")

for(let i = num1; i <= num2; i++){
    console.log(Fibonacci(i))
}
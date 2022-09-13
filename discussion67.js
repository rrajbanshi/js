// 1)Take two values, a and b.
// Perform all the arithmetic operations using these two variables and display the results.

let a = prompt("Enter value of a: ");
let b = prompt("Enter value of b: ");

let add = +a + +b ; 
let sub = +a - +b ; 
let div = +a / +b ; 
let mod = +a % +b ; 
let mul = +a * +b ;
alert(`addition = ${add} , subtraction = ${sub} , multiplication = ${mul} , division = ${div} , module = ${mod}`)


// 2)Write a program to find the roots of a quadratic equation.

let root1, root2;

let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");

let discriminant = num2 * num2 - 4 * num1 * num3;
if (discriminant > 0) {
    root1 = (-num2 + Math.sqrt(discriminant)) / (2 * num1);
    root2 = (-num2 - Math.sqrt(discriminant)) / (2 * num1);

    alert(`roots are -> ${root1} and ${root2}`);
}
else if (discriminant == 0) {
    root1 = root2 = -num2 / (2 * num1);
    alert(`roots are -> ${root1} and ${root2}`);
}
else {
    let realPart = (-num2 / (2 * num1)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * num1)).toFixed(2);
    alert(`roots are-> ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}



// 3) Write a program that prints the result of (a + b) ** 2.

let val1 = prompt("Enter value of val1 ");
let val2 = prompt("Enter value of val2 ");

let result = (+val1 + +val2) ** 2;
alert(result)
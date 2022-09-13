let num1 = parseInt(prompt("Enter first num"))
let num2 = parseInt(prompt("Enter second num"))
if (Number.isInteger(num1) && Number.isInteger(num2)) {
    let res=(num1 + num2);
    alert("Sum is = " + res);
} 
else {
    alert("Can not add incompatible types");
}
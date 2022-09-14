// 1)Check if a number is odd or even.
// Checks if input number is even or odd by using the modulus % operator.

// Print “Number is even” if the number is divisible by 2.
// Else print “Number is odd” if the number returns a remainder when divided by 2.

let num = prompt("Enter the number")
if(+num % 2 == 0){
    alert("number is even")
}
else{
    alert("number is odd")
}



// 2)Find the largest between two numbers using the > and = operators.

// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.

let num1 = +prompt("Enter num1 :")
let num2 = +prompt("Enter num2 :")
if(num1 > num2){
    alert("num1 is largest")
}else if(num1 < num2){
    alert("num2 is largest")
}
else if(num1 == num2){
    alert("num1 and num2 are equal")
}else{
    alert("you have entered something else")
}


// 3)Find if the given number is within the provided start and end range using >=, <=, and && operators.

// Print “Between the range” if num is between start and end values
// Else Print “Outside the range” since num is outside start and end values.

let start = 100
let end = 200
let number = +prompt("Enter the number")
if(number >= start && number <= end){
    alert("number is within the range")
}else{
    alert("outside range")
}
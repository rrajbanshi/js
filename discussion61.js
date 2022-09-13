// 1Take values of the length and breadth of a rectangle from the user and check if it is square or not.

//1
let length = parseFloat(prompt("Enter length:"))
let breadth = parseFloat(prompt("Enter the breadth:"))
if((length * length) == (length * breadth)){
    alert("Both are Square:")
}
else{
    alert("They are not sqaure")
}


//2 Take two int values from the user and print the greatest among them.

let val1 = parseFloat(prompt("Enter num1"))
let val2 = parseInt(prompt("Enter num2"))
if(val1 > val2){
    alert("val1 is greatest:")
}else{
    alert("val2 is greatest:")
}



// 3.A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000.
// Ask the user for the quantity.
// Suppose, one unit will cost 100.
// Judge and print the total cost for the user.

let unit_cost = 100
let quantity = parseInt(prompt("Enter the quantity:"))
let sum = unit_cost * quantity
if(sum > 1000){
    sum = sum - 0.1 * sum;
}
alert(`Total cost is ${sum}`)


// 4)A company decided to give a bonus of 5% to the employee if his/her year of service is more than 5 years.
// Ask the user for their salary and year of service and print the net bonus amount.

let salary = parseFloat(prompt("Enter the salary: "))
let yearsOfService = parseInt(prompt("Enter the year of experience:"))
let netBonus = 0;
if(yearsOfService >= 5){
    netBonus += 0.05 * salary;
}
alert(`net bonus is ${netBonus}`)


// 5)Write a program to print the absolute value of a number entered by the user.
// E.g.-
// INPUT: 1 OUTPUT: 1
// INPUT: -1 OUTPUT: 1
let num1 = parseFloat(prompt("Enter the number:"))
num1 = Math.abs(num1);
alert(`absolute value is ${num1}`)

// 6)Write a program to check whether an entered character is lowercase ( a to z ) or uppercase ( A to Z ).
// (Hint - You can use the ASCII value of the character)

let val = prompt("Enter the character:")

if(val.length > 1){
   alert("You have entered string:Enter char only")
}else{
    let ch = val.charCodeAt(0);
    //A-Z -> 65 --90
    //a-z --> 97-122
    if(ch >= 65 && ch <= 90){
        alert("Uppercase")
    }
    else if(ch >= 97 && ch <= 122){
        alert("Lowercase");
    }
    else{
        alert("some number out of range")
    }
}


// 7)A student will not be allowed to sit in an exam if his/her attendance is less than 75%.
// Take the following input from the user

// Number of classes held
// Number of classes attended.
// And print,
// Percentage of classes attended
// Is the student allowed to sit in the exam or not.

let classes = prompt("Enter the classes:")
let attended = prompt("Number of classes attended:")
let percentage = (+attended / +classes) * 100;
alert(`percentage of class attended is ${percentage}%`)
if(percentage < 75){
    alert("He/She is not allowed to sit in the exam")
}
else{
    alert("he/she is allowed to sit in the exam")
}




//8 Modify the above question to allow the student to sit if he/she has a medical cause. Ask the user if he/she has a medical cause or not ( 'Y' or 'N' ) and print accordingly.

let c = prompt("Enter the class")
let a = prompt("Enter the class attended")
let percent =  (+a / +c) * 100;
alert(`percentage of class attended is ${percent}%`)
if(percent < 75){
    let ch = prompt("Does he/she have medical cause?[Y/N]")
    let charval = ch.charAt(0);
    if(charval.localeCompare("Y")){
        alert("He/She is allowed:")
    }else{
        alert("He/She is not allowed:")
    }
}
else{
    alert("He/she is allowed:")
}
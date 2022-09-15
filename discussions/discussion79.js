// 1)WAF which computes the square of a number.


let num = +prompt("Enter a number: ")

findSqaures(num)

function findSqaures(n){
   let sqaure = n ** 2
   alert(`sqaure of ${n} is -> ${sqaure}`)
}

/*
2)WAF to print your name, city, and hobby in a formatted manner.
Sample Output:

Name: Akash Das
City: Bhubaneswar
Hobby: Giving tasks
*/

myDetails("Rakesh", "Biratnagar", "coding")

function myDetails(name, city, hobby){
    console.log("Name : " + name + "\n" + "City : " + city + "\n" + "Hobby : " + hobby)
}


// 3)WAF to swap two numbers.
// INPUT: a = 10, b = 13
// OUTPUT: a = 13, b = 10

let a = +prompt("Enter a : ")
let b = +prompt("Enter b : ")


swapTwoNumbers(a, b)


function swapTwoNumbers(a, b){
    let temp = a;
    a = b;
    b = temp;
    alert("after swap : a->" + a +" b->" + b)
}


// 4)WAF to print whether a number is even or odd.

let number = +prompt("Enter the number :")
 findEvenOdd(number)

 function findEvenOdd(n){
    if(n % 2 == 0){
        alert(`num ${n} is even number`)
    }else{
        alert(`num ${n} is odd number`)
    }
 }


 /*5)Write a JavaScript function that reverses a number.
Example x = 32245;
Expected Output: 54223*/

let input = prompt("Enter the number:")
findReverse(input)

function findReverse(num)
{
    var n= num;
    var rev = 0, rem;
    while (n != 0)
    {
        rem = n % 10;
        rev = rev * 10 + rem ;
        n = Math.floor(n/10);
}
    alert("reverse num is " + rev)
}


// 6)Write a JavaScript function that accepts a number as a parameter and checks whether the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

let numberVal = +prompt("Enter the number:")
if(checkPrime(numberVal)){
    alert("prime number")
}else{
    alert("not a prime number")
}
function checkPrime(n){
    let flag = true
    if(n <= 1){
        flag = false
        return flag
    }
    for(let i = 2 ; i <= n/2; i++){
        if(n % i == 0){
            flag = false
            break
        }
    }
    return flag
}


// 7) Write a JavaScript function that says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

let perfect = +prompt("Enter the number:")
let res = isPerfect(perfect)
if(res === perfect){
    alert("perfect number")
}
else{
    alert("not a perfect number")
}
function isPerfect(val){
    let n = val
  let sum = 0;
  for(let i = 0; i <= n / 2; i++){
    if(n % i == 0){
        sum += i;
    }
  }
  return sum;
}


// 8)Write a JavaScript function to compute the factors of a positive integer.

let val = +prompt("Enter the number to find factors")
let arr = findFactor(val)
alert(arr)
function findFactor(n){
 let factors = []
 for(let i = 1; i <= n; i++){
    if(n % i == 0){
        factors.push(i);
    }
 }
 return factors;
}

// 9)Write a function to convert Celsius to Fahrenheit.
// Function calFahrenheit() returns the converted Celsius value to Fahrenheit value based on the formula (Celsius × 9/5) + 32 = Fahrenheit.

let celcius = +prompt("Enter the celcius value: ")
alert(`${celcius} degree celcius is ->${findFarenheit(celcius)}F`)

function findFarenheit(celcius){
    let Fahrenheit = ((celcius * 9) / 5) + 32
    return Fahrenheit
}


// 10)Write a function to check if an input string is a palindrome.
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let str = prompt("Enter the string")

if(isPalindrome(str)){
    alert("palindrome")
}else{
    alert("Not Palindrome")
}

function isPalindrome(str){
 const size = str.length
 for(let i = 0; i < size; i++){
    if(str[i] != str[size - i - 1]){
        return false;
    }
 }
 return true;
}
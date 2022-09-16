// 1)WAF which computes the square of a number.
   let num = +prompt("Enter the number : ")
   let sqaureFun = (num) => num ** 2;
   alert(`sqaure of ${num} is ${sqaureFun(num)}`)


// 2)WAF to print whether a number is even or odd.

 let number = +prompt("Enter a number : ")
 
 let findOddEven = (number) => {
    if(number % 2 == 0){
        return "even"
    }else{
        return "odd"
    }
 }
 alert(findOddEven(number))


// 3)Write a JavaScript function that accepts a number as a parameter and checks whether the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

let numberval = +prompt("Enter a number: ")
let findPrime = (numberVal)=>{
    let flag = true;
  if(numberVal <= 1){
     return false;
  }
  for(let i = 2; i <= numberVal / 2; i++){
    if(numberVal % i == 0){
        flag = false;
        break
    }
  }
  return flag;
}
if(findPrime(numberval)){
    alert("prime")
}
else{
    alert("not prime")
}

// 4)Write a function to convert Celsius to Fahrenheit.
// Function calFahrenheit() returns the converted Celsius value to Fahrenheit value based on the formula (Celsius × 9/5) + 32 = Fahrenheit.

let celcius = +prompt("Enter the celcius value: ")
let findFarenheit = (celcius) =>  ((celcius * 9) / 5) + 32
alert(`${celcius} degree celcius is ->${findFarenheit(celcius)}F`)

// 5)WAF which prints if a year is leap year or not.

let yr = +prompt("Enter the year")
let findLeap = (y)=>{
  if((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)){
    alert("leap year")
  }else{
    alert("not a leap year")
  }
}
findLeap(yr)


// 1)WAF to check if a number is an Armstrong number or not.

let num = +prompt("Enter a number : ")

findArmStrong(num)

function findArmStrong(val){
    let n = val;
    let sum = 0;
    while(n != 0){
        let rem = n % 10;
        sum = sum +  rem ** 3
        n = Math.floor(n/10);
        
    }
    if(sum === val){
        alert("The given number is armstrong number:")
    }else{
        alert("The given number is not a armstrong:")
    }
}



// 2)WAF to check if a number is a Special (Krishnamurthy) number or not.

let n = +prompt("Enter the number:")
let total = 0;
krishnaMurthy(n)

function krishnaMurthy(n){
    let stored = n;
    while(n != 0){
        let rem = n % 10;
        let res = findFactorial(rem);
        total += res;
        n = Math.floor(n / 10);
    }
    if(total == stored){
        alert("Special:")
    }else{
        alert("Not Special:")
    }
}
function findFactorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * findFactorial(n - 1);
}
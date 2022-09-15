// 1)1. Create a function addTwo that accepts one input and adds 2 to it.

let num  = +prompt("Enter the number : ")
let addTwo = (num) => num + 2;
console.log(addTwo(num));


// 2)Create a function addS that accepts one input and adds an "s" to it.

let str = prompt("Enter the string")
let addS = (s)=> s +"s";
console.log(addS(str))


/*3)Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

let res = []
function map(arr, callbackfn){
    for(const num of arr){
       callbackfn(num)
    }
}

function addNumber(n){
    res.push(n);
}
let arr = [1, 2, 3, 4, 5];
map(arr, addNumber);
console.log(res);


// 4)The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
const letters = ["a" , "b" , "c" , "d" , "e"] ; 
let alphabet = "" ;

function concatStr(char){
   alphabet += char ;
}

function foreach(chars , callback){
    for(let ch of chars){
        callback(ch);
    }
}

 foreach(letters, concatStr);
console.log(alphabet);


// 5)Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. Call this new function mapWith.

function mapWith(arr, callback) {
    const res = [];
    forEach(arr, (item) => {
      res.push(callback(item));
    });
    return res;
  }

  function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }

  function addTwo(n) {
    return n + 2;
  }
  
  console.log(mapWith([1, 2, 3], addTwo));
  

//6)Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.

let intersecation=(a, b, c)=>{
    let res = [];
    let set1 = new Set();
    let set2 = new Set();
    
    for(let x of b){
        set1.add(x);
    }
    for(let x of c){
        set2.add(x);
    }
    for(let x of a){
        if(set1.has(x) && set2.has(x)){
            res.push(x);
        }
    }
    return res;
    }
    
    console.log(intersecation([5,10,15,20],[15,88,1,5,7],[1,10,15,5,20]));




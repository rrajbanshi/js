//1) synch async****************
// setTimeout(()=>{
//   console.log("hari")
// }, 3000)
// console.log("rakesh")
// console.log("mukesh")
// console.log("hari")
// console.log("shyam")


// setTimeout(()=>{
//   console.log("rajesh")
// }, 3000)


// 2)callback---------------------------------

//regaulr function->

// function fun1(){
//   console.log("step 1")
// }
// function fun2(){
//   console.log("Step 2")
// }
// fun1();
// fun2();
//the output here is also based on the order we call the function

//callback
// function fun1(call_func_two){
//   console.log("step 1 complete");
//   call_func_two()
// }
// function fun2(){
//   console.log("Step 2")
// }

// fun1(fun2)



// let understand through ordering a icecream--[ order->production-->serve]
// part -1
// let order = (call_production) =>{
//   console.log("order placed:")
//   call_production()
// }

// let production =()=>{
//    console.log("production started:")
// }

// order(production);

// part 2

// let stocks = {
//   fruits :['straberry','grapes','banana'],
//   liquid :['water','ice','pepsi','cocacola'],
//   holder : ['cone','cup','stick'],
//   toppings:["chocolate","peanut"]
// }

// let order = (fruit_name, call_production) =>{
//   setTimeout(()=>{
//        console.log(`stocks => ${stocks.fruits[fruit_name]}`)
//         call_production()
//     }, 2000)
//   // call_production()
// }

// let production =()=>{
//    setTimeout(()=>
//     {
//      console.log("production has started")
//           setTimeout(()=>
//                {
//                   console.log("food has been chopped")
//                   setTimeout(()=>{
//                   console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//                     setTimeout(()=>{
//                       console.log("machine was started")
//                       setTimeout(()=>{
//                         console.log(`${stocks. holder[0]} was seleted`)
//                         setTimeout(()=>{
//                           console.log(`topping ->${stocks.toppings[1]}`)
//                           setTimeout(()=>{
//                             console.log("serve the ice-cream")           //callback hell--- tree structure
//                           }, 1000)
//                         }, 3000)
//                       },2000)
//                     }, 1000)
//                   }, 1000)
//                 }
//              , 2000)
//   }, 0000)
// }

// order(0, production);


//the above tree strcuture function call is called -> callback hell, the solution of this is Promises

/***************Promises::****************
 promise cycle
 pending-->resolve-->.then --> ..then --> .finally
 pending -->reject -->.catch--> .finally
 
 for promises:
 1)relationship betweeen time and work
 2)promise chaining
 3)Error handling
 4)The .finally handling

*/

let stocks = {
    fruits :['straberry','grapes','banana'],
    liquid :['water','ice','pepsi','cocacola'],
    holder : ['cone','cup','stick'],
    toppings:["chocolate","peanut"]
  }
  
  
  let is_shop_open  = true;
  let order = (time, work)=>{             //relationship between time and work
    return new Promise((resolve, reject)=>{
      if(is_shop_open){
       setTimeout(()=>{
          resolve(work())
       },2000)
      }else{
        reject(console.log("our shop is closed"))
      }
    })
  }
  order(2000, ()=>console.log(`${stocks.fruits[0]}`)).   //promise chaining
  then(()=>{
    return order(0000, ()=> console.log("production has started: "))
  })
  .then(()=>{
    return order(2000, ()=>console.log("food has been chopped"))
  }).then(()=>{
    return order(3000, ()=>{
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    })
  }).then(()=>{
    return order(2000, ()=> console.log("machine was started"))
  }).then(()=>{
    return order(2000, ()=>{
     console.log(`${stocks. holder[0]} was seleted`) 
    })
  }).then(()=>{
    return order(1000, ()=>{
       console.log(`topping ->${stocks.toppings[1]}`)
    })
  }).then(()=>{
    return order(0000, ()=> console.log("serve the ice cream"))
  })
  
  
  
  
  
  
  
  
  
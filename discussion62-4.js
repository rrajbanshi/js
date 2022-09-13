// WAP to check whether a number is even or odd using a switch case.

let number = parseInt(prompt("Enter the marks of physics: "))
switch(true){
    case (number % 2 == 0):
        alert("even number")
        break;

    case (number % 2 != 0):
        alert("odd number");
        break;

    default:
        alert("wrong entry!!!")
    
}
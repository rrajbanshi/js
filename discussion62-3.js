// WAP to check whether a character is an uppercase or lowercase alphabet. Using the switch statement.

let input = prompt("Enter the character")
let ch = input.charAt(0)
switch(true){
case (ch >= 'A' && ch <= 'Z'):
    alert("Uppercase character");
    break;

case (ch >= 'a' && ch <= 'a'):
    alert("lowercase character")
    break;

default:
    alert("invalid")
}
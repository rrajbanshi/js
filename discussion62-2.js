// Using the switch statement, write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer. Calculate percentage and grade according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

physics = parseInt(prompt("Enter the marks of physics: "))
chemistry = parseInt(prompt("Enter the marks of chemsitry: "))
biology = parseInt(prompt("Enter the marks of biology: "))
mathematics = parseInt(prompt("Enter the marks of Mathematics: "))
computer = parseInt(prompt("Enter the marks of Computer: "))

percentage = (physics + chemistry + biology + mathematics + computer) / 5;
alert("your total percentage is " + percentage);

switch(true){
    case (percentage >= 90):
        alert("Grade A");
        break;
    case (percentage >= 80):
        alert("Grade B");
        break;
    case (percentage >= 70):
        alert("Grade C");
        break;
    case (percentage >= 60):
        alert("Grade D");
        break;
    case (percentage >= 40):
        alert("Grade E");
        break;
    case (percentage < 40):
        alert("Grade F");
        break;
    default:
        alert("altered values")
}
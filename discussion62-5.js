// WAP to find roots of a quadratic equation using switch case.

let root1, root2;
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

let discriminant = b * b - 4 * a * c;

switch(true){
    case (discriminant > 0):
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert(`root are ${root1} and ${root2}`)
        break;

    case (discriminant == 0):
        root1 = root2 = -b / (2 * a);
        alert(`root are ${root1} and ${root2}`)
        break;

    case 3 (discriminant < 0):
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        alert(`The roots are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
            
    default:
        alert("illegal entry:");
        break;
}
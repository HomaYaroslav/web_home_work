function calculator() {
    while (true) {
        let num1 = prompt("Enter first numder:");
        if (num1 === null) break; 
        num1 = Number(num1);
        if (isNaN(num1)) {
            alert("It's not NUMBER! TRY AGAIN.");
            continue; 
        }

        let num2 = prompt("Enter second numder:");
        if (num2 === null) break; 
        num2 = Number(num2);
        if (isNaN(num2)) {
            alert("It's not NUMBER! TRY AGAIN.");
            continue;
        }

        let op = prompt("Enter op: +, -, *, /");
        if (op === null) break; 

        let result;

        switch (op) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    alert("You can't divide by zero!");
                    continue; 
                }
                result = num1 / num2;
                break;
            default:
                alert("Unknown operator!");
                continue; 
        }

        alert(`Result: ${result}`);
    }

    alert("The calculator has finished. See you!");
}

calculator();

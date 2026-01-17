function culculator() {
    let num1 = Number (prompt("enter pershe chislo"));
    let num2 = Number (prompt("enter druge chislo"));
    let op = (prompt("enter +, -, *, /"));
    let result;
    if (op === "+"){
        result = num1 + num2 
    }
    else if (op === "-"){
        result = num1 - num2 
    }
    else if (op === "*"){
        result = num1 * num2 
    }
    else if (op === "/"){
        result = num1 / num2
    }
    else {
        alert ("Error nevidomiy");
        return;
    }
    alert("Result: " + result);
}
culculator();
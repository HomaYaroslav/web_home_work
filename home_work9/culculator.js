function culculator() {
    let num1 = prompt("Enter pershe chislo");
    let num2 = prompt("Enter druge chislo");
    let op = prompt("Enter +, -, *, /");
    let result;
    let output = document.getElementById("output");

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
                output.innerHTML = "На нуль ділити не можна";
                return;
            }
            result = num1 / num2;
            break;

        default:
            output.innerHTML = "Невідомий оператор";
            return;
    }

    output.innerHTML = `Result: ${result}`;
}
    window.onload = function () {
    culculator();
};

culculator();
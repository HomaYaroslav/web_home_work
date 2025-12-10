
let income = 10000;
let rent = 6000;
let food = 3000;
let transport = 2000;
let entertainment = 1000;


let totalExpenses = rent + food + transport + entertainment;
let savings = income - totalExpenses;


console.log("Загальні витрати:", totalExpenses);
console.log("Залишок:", savings);


if (savings > 0) {
    console.log("У вас залишилися гроші");
} else if (savings === 0) {
    console.log("Ви витратили все");
} else {
    console.log("Ви в мінусі!");
}

"use strict";

function calculateTemp(c) {
  let f = c * (9 / 5) + 32;
  alert(c + "degrees in C Converted to F is " + f);
}
calculateTemp(prompt("temp in c"));

function determineAgegroup(age) {
  if (age < 18) {
    alert("Minor");
  } else if (age >= 18 && age < 65) {
    alert("Adult!");
  } else if (age >= 65) {
    alert("Senior!");
    87;
  }
}
determineAgegroup(prompt("Age"));


function mathTime(num1, num2, operator) {

  if (operator === "addition") {
  alert = (num1 + num2)
} else if (operator === "subtraction") {
  alert (num1 - num2);
} else if (operator === "multiplication") {
  alert (num1 * num2);
} else if (operator === "division") {
  alert(num1 / num2);
  }
}
let number1 = prompt("What is the first number?");
let number2 = prompt("What is the second number?");
let oper = prompt("Which operation will be performed? eg addition, subtraction, multiplication, division");

mathTime(number1, number2, oper);


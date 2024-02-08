"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = b * b - 4 * a * c;
  if (disc > 0) {
    arr.push((-b + Math.sqrt(disc)) / (2 * a));
    arr.push((-b - Math.sqrt(disc)) / (2 * a));
  } else if (disc == 0) {
    arr.push(-b / 2 / a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);

  let totalMonth = countMonths;

  let percentPerMonth = percent / 100 / 12;

  let loanAmount = amount - contribution;

  let monthlyPayment = loanAmount * (percentPerMonth + percentPerMonth / (Math.pow(1 + percentPerMonth, totalMonth) - 1));

  let totalAmount = (monthlyPayment * totalMonth).toFixed(2);
  
  return +totalAmount;
}
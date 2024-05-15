U59555732

// Initial logic for calculating tip using ternary operator
const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
  return tip;
};

// Add output functionality to display bill, tip, and total
const displayBillDetails = (bill, tip) => {
  const total = bill + tip;
  console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value $${total.toFixed(2)}.`);
};

// Create and test calcTip function
console.log("Testing calcTip function with bill amount $100:");
const testBill = 100;
const tipAmount = calcTip(testBill);
displayBillDetails(testBill, tipAmount);

// Implement and populate arrays for bills, tips, and totals
const bills = [275, 40, 430];
const tips = bills.map(bill => calcTip(bill));
const totals = bills.map((bill, index) => bill + tips[index]);

console.log("Bill Details:");
bills.forEach((bill, index) => {
  displayBillDetails(bill, tips[index]);
});

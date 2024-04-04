function calculateTip(bill, tipPercentage, numOfPeople) {
if(typeof bill !== 'number' || typeof tipPercentage !== 'number' || numOfPeople === 0) {
  return 'Please provide valid numbers for bill amount, tip percentage, and number of people.'
}

  const tipAmount = bill * tipPercentage / 100
  const totalAmount = bill + tipAmount
  const perPersonAmount = totalAmount / numOfPeople

  return parseFloat(perPersonAmount.toFixed(2))
}

export default calculateTip
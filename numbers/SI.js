let principle = Number(prompt("Enter principle value"))

let time = Number(prompt("Enter time in years"))

let rate = Number(prompt("Enter rate in percentage anually"))

const simpleInterest = (principle * rate * time)/100

console.log(simpleInterest)
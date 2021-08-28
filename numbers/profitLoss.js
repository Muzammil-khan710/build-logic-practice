const costPrice = Number(prompt("Enter the cost price of the product"))

const sellPrice = Number(prompt("Enter the selling price of the product"))


if(sellPrice > costPrice) {
    const profit = sellPrice - costPrice
    console.log(profit ," profit")
} else { 
    const loss = costPrice - sellPrice
    console.log(loss, " loss")
}
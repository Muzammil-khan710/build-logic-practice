// Sum of an array and display the output

var array = [1,2,3,4,5]

var sum = 0;

for(var i in array) {
    sum = sum + array[i]
}

console.log(sum)

// average of an array and display the output

var array1 = [1,2,3,4,5,6]

var sum1 = 0;

for(var j in array1) {
    sum1 = sum1 + array1[j]
}
const average = sum1/array1.length
console.log(average)
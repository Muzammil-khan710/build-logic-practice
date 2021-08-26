var array1  = [3,5,2,9,4]

var array2 = [6,2,8,1,3]

var sum1 = 0;

for(var i in array1) {
    sum1 = sum1 + array1[i]
}

var sum2 = 0;

for(var i in array2) {
    sum2 = sum2 + array2[i]
}

const output = sum1 + sum2

console.log(output)


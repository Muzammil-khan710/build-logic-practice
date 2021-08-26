let array1  = [3,5,2,9,4]

let array2 = [6,2,8,1,3]

let sum1 = 0;
let sum2 = 0

for(let i in array1 && array2) {
    sum1 = sum1 + array1[i]
    sum2 = sum2 + array2[i]
}

const output = sum1 + sum2

console.log(output)

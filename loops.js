let array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let x =0

while(x < array.length) {
console.log(array[x])
x = x + 1
}

do {
    console.log("Numero de X é: " + x)
   console.log("valor da posicao é: " + array[x])

    x++
} while (x < array.length)

for(let index = 0; index < array.length; index++) {
    console.log("Numero de X é: " + index)
    console.log("valor da posicao é: " + array[index])
}
let x = 10
let y = "10"

console.log(x == y)
console.log(x === y)


function compararNumeros(num1, num2) {
    if(num1 < num2) {
        return "Numero 2 é maior"
    } else if(num1 == num2) {
        return "Os numeros sao iguais"
    }
        else {
        return "Numero 1 é maior"
    }
}

function numberCheck(numero) {
    if(numero > 0) {
        return "Numero Positivo"
    } else if (numero < 0) {
        return "Numero negativo"
    } else {
        return "Numero Zero"
    }
}

function dayOfTheWeek(dia) {
    switch (dia) {
        case 1:
            return "Sunday"
        case 2:
            return "Monday"    
        case 3:
            return "tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return "Não é um dia válido"
    } 
        
    }


console.log(dayOfTheWeek(10))
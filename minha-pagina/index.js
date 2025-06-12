let button = document.getElementById('button')
let array = document.getElementsByClassName('title-red')


button.addEventListener('click', function() {
    for (let x = 0; x < array.length; x++) {
        if (array[x].tagName === 'H2') {
            array[x].textContent = "Esse texto é um H2"
        } else if (array[x].tagName === 'H3') {
            array[x].textContent = "Esse texto é um H3"
            array[x].style.color = "purple"
        } else {
            array[x].textContent = "Texto alterado pelo JS"
        }
    }

    
//    for (let x = 0; x < array.length; x++) {
//        array[x].textContent = "Essa frase mudou!!!"
//        console.log(`Elemento alterado: ${array[x].tagname}`)
//    }

//------------------------------------------------------------------
//let x = 0
//    while (x < array.length){
//        
///        array[x].textContent = "Essa frase mudou!!!"
//        x++
//    } 
})
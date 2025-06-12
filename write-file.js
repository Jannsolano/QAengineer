const fs = require('fs')

fs.writeFile('message.txt', "Olá mundo", (err) => {
    if (err) {
        throw err
    } else {
        console.log('the file has been saved!')
    }
})
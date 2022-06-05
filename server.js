const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffienated': true,
        'flavour': 'delicious' 
    },
    'matcha': {
        'type': 'green',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffienated': false,
        'flavour': 'delicious' 
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTimeSeconds': 'unknown',
        'caffienated': 'unknown',
        'flavour': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})
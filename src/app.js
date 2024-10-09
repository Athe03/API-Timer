const express = require('express')
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoute.js')
const timerRoute = require('./routes/timerRoute.js')

const app = express()
const port = 3000

async function main() {
    await mongoose.connect('mongodb://mongo/apiTimer');
}

app.use(express.json())

app.use('/api/user', userRoute)
app.use('/api/timer', timerRoute)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
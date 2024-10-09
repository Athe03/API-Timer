const userRoute = require('../routes/userRoute.js')
const timerRoute = require('../routes/timerRoute.js');

const express = require('express');

const importRoute = async() => {
    try {
        app.use(express.json())

        app.use('/api/user', userRoute)
        app.use('/api/timer', timerRoute)
    } catch (erreur) {
        console.error("Express erreur : ", erreur);
    }
}

module.exports = {importRoute};
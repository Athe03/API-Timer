const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://mongo/apiTimer');
        console.log('Connected to database');
    } catch (erreur) {
        console.error("Mongodb erreur : ", erreur);
    }
}

export default connectDB;
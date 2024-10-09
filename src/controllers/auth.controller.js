const Users = require("../models/UserModel.js") ;

const bcrypt = require("bcryptjs");
require('dotenv').config();

const register = (async (req, res) => {
    const {email, password, role} = req.body;

    try{
        const user = await Users.findOne({email: email});
        if(user){
            res.status(403).json({msg: "Email déja utilisé."});
            return //pour quitter directement la fonction
        }

        const hashedPassword = await bcrypt.hash(password);
        const newUser = new Users({email, password: hashedPassword, role});
        await newUser.save();

        res.status(201).json({msg: "Utilisateur créé avec succès."});
    }catch(erreur){
        console.error(erreur);
        res.status(500).json({msg: "Erreur interne du serveur."});
    }
})

const login = (async (req, res) => {
    const {email, password, role} = req.body;

    try{
        const user = await Users.findOne({email});
        if(!user){
            return res.status(400).json({msg: "Email ou mot de passe incorrect."});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg: "Email ou mot de passe incorrect."});
        }   
        
        const payload = {
            id: user.id,
            role: true
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.json({token});
    }catch (erreur){
        console.error(erreur);
        res.status(500).json({msg: "Erreur interne du serveur."});
    }
})

module.exports = {
    login, 
    register
}
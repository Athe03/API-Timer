const Timer = require("../models/TimerModel.js") ;

ObjectId = require('mongodb').ObjectId;

const submitReactionTime = (async(req,res) => {
    const {time} = req.body;

    try{
        const newTimer = new Timer({id: req.user.id, time});

        await newTimer.save();
    }catch (erreur){
        console.error(erreur);
        res.status(500).json({msg: "Erreur interne du serveur."});
    }
})

const getReactionTimes = (async(req, res) => {
    const {time} = req.body;

    try{
        const userId = ObjectId(req.user.id);
        const temps = await Timer.find({user_id :userId});
        
        res.json(temps);
    }catch (erreur){
        console.error(erreur);
        res.status(500).json({msg: "Erreur interne du serveur."});
    }
})

module.exports = {
    submitReactionTime,
    getReactionTimes
}
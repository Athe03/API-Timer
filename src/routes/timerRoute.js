const middleware = require('../middlewares/jwtMiddlewares.js');

const express = require("express");
const router = express.Router();

const {
    submitReactionTime,
    getReactionTimes
} = require ('../controllers/timer.controller.js')

router.post("/submit-reaction-ime", middleware.verifyToken, submitReactionTime)

router.get("/get-reaction-times", middleware.verifyToken, getReactionTimes)

module.exports = {
    submitReactionTime,
    getReactionTimes
}
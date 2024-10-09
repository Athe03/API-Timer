const { default: connectDB } = require('./services/connectDB.js');
const { default: importRoute } = require('./services/importRoute.js');
const { default: serveur } = require('./services/serveur.js');

const express = require('express')

const app = express()

connectDB;
importRoute;
serveur;
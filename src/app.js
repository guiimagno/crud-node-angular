const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const Candidato = require('./models/Candidato.js')

// configuração servidor

app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// rotas
const candidatoRoutes = require('./routes/candidato.routes');

app.use("./api/candidatos", candidatoRoutes);

module.exports = app;
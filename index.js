const express = require('express');
const cors = require('cors');
const quotesRepository = require('./data/quotesRepository');
const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials: true
  }
app.use(cors(corsOptions));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('API is running!!!');
})

app.get('/v1/quotes/:num?', function (req, res) {
    res.send(quotesRepository.getRandom(req.params.num || 1));
});

app.listen(port, function () {
    console.log('Servidor corriendo el puerto:', port);
})
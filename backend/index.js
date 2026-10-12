const express = require(`express`);
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());

// Importação de rotas

// Tags
const createTag = require('./controller/createTag.js');
app.use('/createTag', createTag);

const deleteTag = require('./controller/deleteTag.js');
app.use('/deleteTag', deleteTag);

const updateTag = require('./controller/updateTag.js');
app.use('/updateTag', updateTag);

const getOneTag = require('./controller/getOneTag.js');
app.use('/getOneTag', getOneTag);

const getAllTags = require('./controller/getAllTags.js');
app.use('/getAllTags', getAllTags);

// Images
const createImage = require(`./controller/createImage.js`);
app.use(`/createImage`, createImage);


app.get(`/`, (req, res) => {
    res.status(200).json("Hello world");
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`)
})
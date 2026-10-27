const express = require(`express`);
const app = express();
const cors = require('cors');
const path = require('path');
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
const createImage = require(`./controller/imageCRUD/createImage.js`);
app.use(`/createImage`, createImage);

const deleteImage = require('./controller/imageCRUD/deleteImage.js');
app.use('/deleteImage', deleteImage);

const updateImage = require('./controller/imageCRUD/updateImageTags.js');
app.use('/updateImage', updateImage);

const getOneImage = require('./controller/imageCRUD/getOneImage.js');
app.use('/getOneImage', getOneImage);

const getAllImages = require('./controller/imageCRUD/getAllImages.js');
app.use('/getAllImages', getAllImages);

const getAllImagesTag = require('./controller/imageCRUD/getAllImagesTag.js');
app.use('/getAllImagesTag', getAllImagesTag);

app.use('/imagens', express.static(
    path.join(__dirname, '/images/')
));


app.get(`/`, (req, res) => {
    res.status(200).json("Hello world");
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`)
})
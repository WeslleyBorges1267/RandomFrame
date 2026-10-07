const express = require(`express`);
const app = express();
const Tags = require('./model/TagsDAO.js')
const teste = new Tags();

app.use(express.json());


// Importação de rotas
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

app.get(`/`, (req, res) => {
    const data = teste.selectAllTags();
    res.status(200).json(data)
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
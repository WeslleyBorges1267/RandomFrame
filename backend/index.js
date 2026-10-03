const express = require(`express`);
const app = express();
const Tags = require('./model/TagsDAO.js')
const teste = new Tags();

app.get(`/`, (req, res) => {
    const data = teste.selectAllTags();
    res.status(200).json(data)
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
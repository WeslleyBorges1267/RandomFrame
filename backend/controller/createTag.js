const Tag = require('./../model/TagsDAO.js');
const localTag = new Tag();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const {nomeTag} = req.body;
    localTag.createTag(nomeTag);
    res.status(200).json(`Tag ${nomeTag} criada com sucesso`);
});

module.exports = router;
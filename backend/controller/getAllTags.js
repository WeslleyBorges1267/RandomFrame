const Tag = require('./../model/TagsDAO.js');
const localTag = new Tag();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = localTag.getAllTags();
    const organizeData = new Map();
    data.forEach(element => {
        organizeData.set(element['idTag'], element['nomeTag']);
    });
    const dataObject = Object.fromEntries(organizeData);
    if(data == null){
        res.status(404).json(data);
    }else{
        res.status(200).json(dataObject);
    }
    
})

module.exports = router;
const express = require(`express`);
const router = express.Router();
const ImageTag = require('../../model/Imagens_tagsDAO');
const localImageTag = new ImageTag();

router.post('/', (req, res) => {
    const {id_tag} = req.body;

    try{
        const data = localImageTag.getAllImagesTag(id_tag);
        if(data.length == 0){
            res.status(404).json("No image found");
        }else{
            res.status(200).json(data);
        }
    }catch(exception) {
        console.log(`Erro ao tentar obter todas as fotos do banco:`, exception);
        res.status(500).json("Server internal error 500");
    }
})

module.exports = router;
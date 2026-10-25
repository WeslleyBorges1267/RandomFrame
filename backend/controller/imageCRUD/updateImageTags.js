const express = require(`express`);
const router = express.Router();
const Imagens_tags = require('./../../model/Imagens_tagsDAO');
const localImagens_tags = new Imagens_tags();

router.post('/', (req, res) => {
    const {id_image, array_tags} = req.body;
    try{
        localImagens_tags.updateImageTag(id_image, array_tags);
    }catch(error){
        console.log(`Erro ao tentar atualizar os dados da imagem de id ${id_image}:`, error);
    }
    res.status(200).json("Its fine!");
})

module.exports = router;
const database = require(`./../sqlite/database.js`);

class Imagens_tags{

    createImageTag(idImage, idTag) {
        const query = database.prepare(`
            INSERT INTO imagens_tags (id_imagem, id_tag) VALUES (?, ?);
        `);
        
        const result = query.run(idImage, idTag);
        const newIdImage = result.lastInsertRowid;
        query.close();

        return newIdImage;
    }

    updateImageTag(id_image, array_tags) {
        // Código irá apagar todas as tags linkadas a imagem
        // e então irá criar novas na tabela imagens_tags
    }

}

module.exports = Imagens_tags;
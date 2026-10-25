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
        const deleteQuery = database.prepare(`
                DELETE FROM imagens_tags WHERE id_imagem = ?;
            `)
        const result = deleteQuery.run(id_image);
        deleteQuery.close();

        const insertQuery = database.prepare(`
                INSERT INTO imagens_tags (id_imagem, id_tag) VALUES (?, ?);
            `)
        for(let i = 0; i < array_tags.length; i++){
            insertQuery.run(id_image, array_tags[i]);
        }

        insertQuery.close();
        // e então irá criar novas na tabela imagens_tags
    }

}

module.exports = Imagens_tags;
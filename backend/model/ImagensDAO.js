const database = require(`./../sqlite/database.js`);

class Image{

    createImage(extension_image) {
        const query = database.prepare(`
            INSERT INTO imagens (extensao_imagem) VALUES (?);
        `);
        
        const result = query.run(extension_image);
        const newIdImage = result.lastInsertRowid;
        query.close();

        return newIdImage;
    }

    deleteImage(id_imagem) {
        const query = database.prepare(`
            DELETE FROM imagens_tags WHERE id_imagem = ?;
            DELETE FROM imagens WHERE id_imagem = ?;
        `);
        
        const result = query.run(id_imagem);
        query.close();
    }

}

module.exports = Image;
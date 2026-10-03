const database = require(`./../sqlite/database.js`);

class Tags{

    createTag(nomeTag) {
        const query = database.prepare(`
                INSERT INTO tags (nomeTag) VALUES (?);
            `);
        
        query.run(nomeTag);
        query.close();
    }

    deleteTag(idTag) {
        const query = database.prepare(`
                DELETE FROM tags WHERE idTag = ?;
            `);
        query.run(idTag);
        query.close();
        return 0;
    }

    updateTag(newNameTag, idTag) {
        const query = database.prepare(`
                UPDATE tags SET nomeTag = ? WHERE idTag = ?;
            `);
        query.run(newNameTag, idTag);
        query.close();
        return 0;
    }

    selectOneTag(idTag) {
        const query = database.prepare(`
                SELECT * FROM tags WHERE idTag = ?;
            `)
        const returnData = query.all(idTag);
        return returnData[0];

    }

    selectAllTags() {
        const query = database.prepare(`
                SELECT * FROM tags;
            `)
        const returnData = query.all();
        return returnData;
    }

}

module.exports = Tags;
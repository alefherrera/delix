const {Models} = require('../../db');

const upsertCommand = (req, res, entity) => {
    const obj = req.body;
    if (!obj.id) {
        entity.create(obj).then(r => res.json(r));
    } else {
        entity.upsert(obj).then(r => res.json(r));
    }
};

const deleteCommand = (req, res, entity) => {
    entity.destroy({
        where: {
            id: req.params.id
        }
    }).then(r => res.json(r));
};

const selectCommand = (req, res, entity) => {
    entity.findAll().then(r => res.json(r));
};

module.exports = {
    abml: (router, tableName) => {

        const entity = Models[tableName];
        const url = `/${tableName}`;

        router.post(url, (req, res) => {
            upsertCommand(req, res, entity);
        });

        router.get(url, (req, res) => {
            selectCommand(req, res, entity);
        });

        router.delete(`${url}/:id`, (req, res) => {
            deleteCommand(req, res, entity);
        });

    },

    am: (router, tableName) => {

        const entity = Models[tableName];
        const url = `/${tableName}`;

        router.post(url, (req, res) => {
            upsertCommand(req, res, entity);
        });

    },

    b: (router, tableName) => {

        const entity = Models[tableName];
        const url = `/${tableName}`;

        router.delete(`${url}/:id`, (req, res) => {
            deleteCommand(req, res, entity);
        });

    },

    l: (router, tableName) => {
        const entity = Models[tableName];
        const url = `/${tableName}`;

        router.get(url, (req, res) => {
            selectCommand(req, res, entity);
        });

    }

};

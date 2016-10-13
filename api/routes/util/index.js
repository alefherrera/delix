const {Models} = require('../../db');
const getModel = tableName => Models[tableName];

const modify = (entity, obj, callback) => {
    if (!obj.id) {
        entity.create(obj).then(r => callback(r));
    } else {
        entity.upsert(obj).then(r => callback(r));
    }
};

const destroy = (entity, id, callback) => {
    entity.destroy({where: {
            id
        }}).then(r => callback(parseInt(id)));
};

const getAll = (entity, config, callback) => {
    entity.findAll(config).then(r => callback(r));
};

const getById = (entity, id, config, callback) => {
    entity.findById(id, config).then(r => callback(r));
};

const generate = (router, tableName, {config, include}) => {
    const defaultConfig = {
        a: true,
        b: true,
        m: true,
        l: true
    };
    const conf = Object.assign(defaultConfig, config);
    const entity = getModel(tableName);
    const url = `/${tableName}`;

    if (conf.a || conf.m) {
        router.post(url, (req, res) => {
            modify(entity, req.body, r => res.json(r));
        })
    }

    if (conf.b) {
        router.delete(`${url}/:id`, (req, res) => {
            destroy(entity, req.params.id, r => res.json(r));
        });
    }

    if (conf.l) {
        router.get(url, (req, res) => {
            getAll(entity, {
                include
            }, r => res.json(r));
        });

        router.get(`${url}/:id`, (req, res) => {
            getById(entity, req.params.id, {
                include
            }, r => res.json(r));
        });
    }

}

module.exports = {
    abml: (router, tableName, include) => {
        generate(router, tableName, {include});
    },

    am: (router, tableName) => {
        generate(router, tableName, {
            config: {
                b: false,
                l: false
            }
        });
    },

    b: (router, tableName) => {
        generate(router, tableName, {
            config: {
                a: false,
                m: false,
                l: false
            }
        });
    },

    l: (router, tableName, include) => {
        generate(router, tableName, {
            config: {
                a: false,
                b: false,
                m: false
            },
            include
        });
    }
};

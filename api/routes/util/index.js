const { Models } = require('../../db');
module.exports = {
  abm: (router, tableName) => {

    const entity = Models[tableName];
    const url = `/${tableName}`;

    router.post(url, (req, res) => {
      const obj = req.body;
      if (!obj.id) {
        entity.create(obj).then(r => res.json(r));
      } else {
        entity.upsert(obj).then(r => res.json(r));
      }
    });

    router.get(url, (req, res) => {
      entity.findAll().then(r => res.json(r));
    });

    router.delete(`${url}/:id`, (req, res) => {
      entity.destroy({ where: { id: req.params.id }}).then(r => res.json(r));
    });

  }
};

const { Models } = require('../db');
module.exports = {
  abm: (router, tableName) => {
    
    const entity = Models[tableName];
    const url = `/${tableName}`;

    router.post(url, (req, res) => {
      entity.upsert(req.body).then(r => res.json(r));
    });

    router.get(url, (req, res) => {
      entity.findAll().then(r => res.json(r));
    });

    router.delete(`${url}/:id`, (req, res) => {
      entity.destroy({ where: { id: req.params.id }}).then(r => res.json(r));
    })

  }
}

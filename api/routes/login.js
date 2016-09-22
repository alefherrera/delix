const { User } = require('../db').Schemas;
module.exports = router => {
  router.post('/login', (req, res) => {
    const user = req.body;
    User.findOne({ where: user }).then(dbUser => {
      if (dbUser) {
        res.send('Logged in');
      } else {
        res.status(500).send('Wrong data');
      }
    });
  });
}

module.exports = router => {

  router.post('/promo', (req, res) => {
    res.send('promo');
  });

  router.get('/promo', (req, res) => {
    res.send({ name: 'prueba' });
  });

}

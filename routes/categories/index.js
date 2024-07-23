const routes = require('express').Router();
const data = require('../../data.json');

routes.get('/', (req, res) => {
  res.status(200).json(data);
});

module.exports = routes;

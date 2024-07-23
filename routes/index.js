const routes = require('express').Router();
const posts = require('./posts');
const categories = require('./categories');

routes.use('/posts', posts);
routes.use('/categories', categories);

module.exports = routes;

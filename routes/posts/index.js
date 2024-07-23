const express = require('express');
const posts = express.Router();
const bodyParser  = require('body-parser');
const app = express();
app.use(bodyParser.json());
const postsDb = require('../../models/posts');

posts.post('/', function(req, res, next) {
  try {
    console.log(req.body);
    res.json(postsDb.create(req.body));
  } catch(err) {
    console.error(`Error while creating post`, err.message);
    next(err);
  }
});

module.exports = posts;

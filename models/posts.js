const db = require('./db');

function validatePost(post) {
  let messages = [];

  console.log(post);

  if (!post) {
    messages.push('empty request');
  }

  if (!post.title) {
    messages.push('title is required');
  }

  if (!post.contents) {
    messages.push('contents is required');
  }

  if (!post.categoryId) {
    messages.push('categoryId is required');
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

function create(postObj) {
  validatePost(postObj);
  const {title, contents, categoryId} = postObj;
  const result = db.run('INSERT INTO post (title, contents, categoryId) VALUES (@title, @contents, @categoryId)', {title, contents, categoryId});
console.log(result);
  let message = 'Error in creating post';
  if (result.changes) {
    message = 'Post created successfully';
  }

  return {message};
}

module.exports = {
  create
}

'use strict';

const { getBody } = require('./src/helpers');
const { getAll, storeAuthor, deleteAuthor } = require('./src/services/author');

module.exports.getAllAuthors = async _ => {
  return getAll();
};

module.exports.storeAuthor = event => {
  return storeAuthor(getBody(event));
};

module.exports.deleteAuthor = event => {
  return deleteAuthor(event);
};

'use strict';

const { getBody } = require('./src/helpers');
const { allAuthors, storeAuthor, updateAuthor, deleteAuthor } = require('./src/services/author');
const { allPublications } = require('./src/services/publication');

module.exports.allAuthors = async _ => {
  return allAuthors();
};

module.exports.storeAuthor = event => {
  return storeAuthor(getBody(event));
};

module.exports.updateAuthor = event => {
  return updateAuthor(getBody(event), event.pathParameters.id);
};

module.exports.deleteAuthor = event => {
  return deleteAuthor(event);
};

module.exports.allPublications = async _ => {
  return allPublications();
};

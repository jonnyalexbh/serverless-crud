'use strict';

const { getAll } = require('./src/services/author');

module.exports.getAllAuthors = async _ => {
  return getAll();
};

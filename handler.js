'use strict';

module.exports.getAllAuthors = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: 'all authors' }),
  };
};

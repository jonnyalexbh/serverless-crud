const Sequelize = require('sequelize')

const db = require('../config/db');
const logger = require('../logger');
const { json } = require('../helpers');
const Author = require("../models/author")(db, Sequelize);

exports.getAll = async () => {
  try {
    logger.info('Trying to create a author');
    const authors = await Author.findAll();
    return json(authors);
  } catch (error) {
    logger.error(error);
    throw new Error('Cannot fetch authors');
  }
};

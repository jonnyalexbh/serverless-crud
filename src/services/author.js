const Sequelize = require('sequelize')

const db = require('../config/db');
const logger = require('../logger');
const { json } = require('../helpers');
const { parseCreateAuthor } = require('../mappers');
const Author = require("../models/author")(db, Sequelize);

exports.getAll = async () => {
  try {
    logger.info('Trying to create a author');
    const authors = await Author.findAll();
    return json({ authors });
  } catch (error) {
    logger.error(error);
    throw new Error('Cannot fetch authors');
  }
};

exports.storeAuthor = async (body) => {
  try {
    logger.info('Trying to create a author');
    const { firstName, lastName, email, dateOfBirth } = parseCreateAuthor(body);
    const author = await Author.create({ firstName, lastName, email, dateOfBirth });
    return json({ author }, 201);
  } catch (error) {
    logger.error(error.message);
    throw new Error('Cannot create author');
  }
};

exports.updateAuthor = async (body, id) => {
  try {
    logger.info('Trying to update a author');
    const { firstName, lastName, email, dateOfBirth } = parseCreateAuthor(body);
    await Author.update({ firstName, lastName, email, dateOfBirth }, {
      where: { id: id }
    });
    return json({ mesagge: 'Author was update successfully' });
  } catch (error) {
    logger.error(error.message);
    throw new Error('Cannot update author');
  }
};

exports.deleteAuthor = async (event) => {
  try {
    logger.info('Attempting delete author');
    await Author.destroy({ where: { id: event.pathParameters.id } });
    return json({ mesagge: 'Author was deleted successfully' });
  } catch (error) {
    logger.error(error.message);
    throw new Error('Cannot delete author');
  }
};

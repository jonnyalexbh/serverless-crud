const Sequelize = require('sequelize')

const db = require('../config/db');
const logger = require('../logger');
const { json } = require('../helpers');
const { parseCreatePublication } = require('../mappers');

const Publication = require("../models/publication")(db, Sequelize);

exports.allPublications = async () => {
  try {
    logger.info('Trying to create a publication');
    const publication = await Publication.findAll();
    return json({ publication });
  } catch (error) {
    logger.error(error);
    throw new Error('Cannot fetch publication');
  }
};

exports.storePublication = async (data) => {
  try {
    logger.info('Trying to create a publication');
    const { authorId, title, body } = parseCreatePublication(data);
    const publication = await Publication.create({ authorId, title, body });
    return json({ publication }, 201);
  } catch (error) {
    logger.error(error.message);
    throw new Error('Cannot create publication');
  }
};

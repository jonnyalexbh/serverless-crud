const Sequelize = require('sequelize')

const db = require('../config/db');
const logger = require('../logger');
const { json } = require('../helpers');

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

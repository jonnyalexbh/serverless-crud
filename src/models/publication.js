module.exports = (sequelize, Sequelize) => {
  const Publication = sequelize.define('Publication', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    authorId: {
      type: Sequelize.INTEGER,
      references: {
        model: sequelize.models.authors,
        key: 'id'
      }
    },
    title: {
      type: Sequelize.STRING(),
      allowNull: false,
      defaultValue: null,
    },
    body: {
      type: Sequelize.STRING(),
      allowNull: false,
      defaultValue: null,
    },
  }, {
    underscored: true,
    timestamps: false
  })
  Publication.associate = models => {
    Publication.belongsTo(models.authors, {
      as: 'authorId',
      foreignKey: 'author_id'
    });
  };
  return Publication;
};

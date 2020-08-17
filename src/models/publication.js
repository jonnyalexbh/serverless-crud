module.exports = (sequelize, Sequelize) => {
  const Publication = sequelize.define('Publication', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    author_id: {
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
  return Publication;
};

module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define('Author', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING(),
      allowNull: false,
      defaultValue: null,
    },
    lastName: {
      type: Sequelize.STRING(),
      allowNull: false,
      defaultValue: null,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(),
      unique: true
    },
    dateOfBirth: {
      allowNull: false,
      type: Sequelize.DATE()
    },
  }, {
    underscored: true,
    timestamps: false
  })
  return Author;
};

const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Movie = sequelize.define("movie", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  releaseDate: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: true,
  },
});

module.exports = Movie;

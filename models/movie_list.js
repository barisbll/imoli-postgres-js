const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const MovieList = sequelize.define("movie_list", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = MovieList;

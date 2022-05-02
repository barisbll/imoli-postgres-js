const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const MovieListMovie = sequelize.define("movie_list_movie", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = MovieListMovie;

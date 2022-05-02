const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("../routes/routes");
const MovieListMovie = require("../models/movie_list_movie");
const MovieList = require("../models/movie_list");
const MoviePeople = require("../models/movie_people");
const Movie = require("../models/movie");
const People = require("../models/people");

const createServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.use(routes);

  People.belongsToMany(Movie, { through: MoviePeople });
  Movie.belongsToMany(People, { through: MoviePeople });

  Movie.belongsToMany(MovieList, { through: MovieListMovie });
  MovieList.belongsToMany(Movie, { through: MovieListMovie });

  return app;
};

module.exports = createServer;

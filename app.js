const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes/routes");
const errorController = require("./controller/404");
const sequelize = require("./util/database");
const MovieListMovie = require("./models/movie_list_movie");
const MovieList = require("./models/movie_list");
const MoviePeople = require("./models/movie_people");
const Movie = require("./models/movie");
const People = require("./models/people");

const createServer = require("./util/server");

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.use(routes);

// People.belongsToMany(Movie, { through: MoviePeople });
// Movie.belongsToMany(People, { through: MoviePeople });

// Movie.belongsToMany(MovieList, { through: MovieListMovie });
// MovieList.belongsToMany(Movie, { through: MovieListMovie });

const app = createServer();

sequelize
  //   .sync({ force: true })
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(errorController.get404);

app.use((error, req, res, next) => {
  if (!error.status) error.status = 500;
  res.status(error.status).json({ error: error.message });
});

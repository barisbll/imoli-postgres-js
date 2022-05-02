const People = require("../models/people");
const Movie = require("../models/movie");
const MoviePeople = require("../models/movie_people");
const MovieList = require("../models/movie_list");
const MovieListMovie = require("../models/movie_list_movie");

const { _setupDatabase } = require("../util/setup_db");
const { isNull } = require("lodash");
const _excelHelper = require("../util/excel");

exports.getFilms = async (req, res, next) => {
  try {
    let movies = await Movie.findAll();

    if (movies.length === 6) {
      return res.status(200).json({ movies });
    }

    await _setupDatabase();

    movies = await Movie.findAll();

    res.status(200).json({ movies });
  } catch (err) {
    next(err);
  }
};

exports.postFavorites = async (req, res, next) => {
  const { name } = req.body;
  const { ids } = req.body;

  try {
    const foundMovieList = await MovieList.findAll({ where: { name: name } });

    if (foundMovieList.length > 0) {
      throw new Error(
        "There is already a favorite list registered with that name"
      );
    }

    const movieList = await MovieList.create({
      name: name,
    });

    const movies = [];
    for (const counter in ids) {
      const movie = await Movie.findByPk(ids[counter]);

      if (isNull(movie)) {
        throw new Error("There is no film with id " + id);
      }

      movieList.addMovie(movie);

      movies.push(movie);
    }

    res.status(201).json({
      movieListName: name,
      movies,
    });
  } catch (err) {
    next(err);
  }
};

// Get all the favorites list with pagination
exports.getFavorites = async (req, res, next) => {
  const { page = 1, limit = 2 } = req.query;
  try {
    // response array to be returned
    const response = [];

    // Find all the favorites lists
    const movieLists = await MovieList.findAll({
      limit: limit,
      offset: limit * (page - 1),
    });

    // First loop find one favorite list and push its name to do the response object
    for (movieListCounter in movieLists) {
      const movieListId = movieLists[movieListCounter].id;

      const movieListMovieResults = await MovieListMovie.findAll({
        where: { movieListId: movieListId },
      });

      response.push({
        id: movieListId,
        movieListName: movieLists[movieListCounter].name,
        movies: [],
      });

      const tempMovies = [];

      // Second loop fetch all the movies from the favorite and push it to tempMovies
      for (counter in movieListMovieResults) {
        const movieListMovieId = movieListMovieResults[counter].movieId;

        const movie = await Movie.findByPk(movieListMovieId);

        tempMovies.push(movie);
      }

      // Push temp movies to the response array
      response[movieListCounter].movies.push(...tempMovies);
    }

    res.status(200).json({ res: response });
  } catch (err) {
    next(err);
  }
};

exports.getFavorite = async (req, res, next) => {
  const { id } = req.params;

  try {
    const movieList = await MovieList.findByPk(id);

    if (!movieList) {
      throw new Error("There is no favorite list with given id");
    }

    const responseObject = {
      id: movieList.id,
      movieListName: movieList.name,
      movies: [],
    };

    const movieListMovieResults = await MovieListMovie.findAll({
      where: { movieListId: movieList.id },
    });

    const tempMovies = [];

    for (counter in movieListMovieResults) {
      const movieListMovieId = movieListMovieResults[counter].movieId;

      const movie = await Movie.findByPk(movieListMovieId);

      tempMovies.push(movie);
    }

    responseObject.movies.push(...tempMovies);

    res.json({ responseObject });
  } catch (err) {
    next(err);
  }
};

exports.getFile = async (req, res, next) => {
  const { id } = req.params;

  try {
    const movieList = await MovieList.findByPk(id);

    if (!movieList) {
      throw new Error("There is no favorite list with given id");
    }

    const responseObject = {
      id: movieList.id,
      movieListName: movieList.name,
      movies: [],
      chars: [],
    };

    const tempMovies = [];
    const charsObject = { chars: [], ids: [] };

    const movieListMovieResults = await MovieListMovie.findAll({
      where: { movieListId: movieList.id },
    });

    for (counter in movieListMovieResults) {
      // Fetching movies and adding to the tempMovies array
      const movieListMovieId = movieListMovieResults[counter].movieId;
      const movie = await Movie.findByPk(movieListMovieId);
      tempMovies.push(movie);

      // Fetching moviePeople records for one movie
      const moviePeopleResults = await MoviePeople.findAll({
        where: { movieId: movie.id },
      });

      // Fetching people from moviePeopleResult and adding to Set
      for (moviePeopleCounter in moviePeopleResults) {
        const people = await People.findByPk(
          moviePeopleResults[moviePeopleCounter].personId
        );

        if (people.id in charsObject.ids) {
          continue;
        } else {
          charsObject.ids.push(people.id);
        }

        charsObject.chars.push(people);
      }
    }

    responseObject.movies.push(...tempMovies);
    responseObject.chars.push(...charsObject.chars);

    _excelHelper(responseObject, res);

    // res.json({ responseObject });
  } catch (err) {
    next(err);
  }
};

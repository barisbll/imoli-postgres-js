const axios = require("axios");

const People = require("../models/people");
const Movie = require("../models/movie");

const _createPeopleCallHelper = async (character) => {
  try {
    const response = await axios.get(character);

    const people = await People.create({
      name: response.data.name,
    });

    // Calling helper function
    for (let i = 0; i < response.data.films.length; i++) {
      await _createMovieMakeRelations(response.data.films[i], people);
    }
  } catch (err) {
    console.log(err);
  }
};

// Takes film url as parameter,
// Creates a movie if not exists and makes the relation
const _createMovieMakeRelations = async (film, people) => {
  const response = await axios.get(film);

  const movieResponse = await Movie.findAll({
    where: { title: response.data.title },
  });

  if (movieResponse.length === 0) {
    const movie = await Movie.create({
      title: response.data.title,
      releaseDate: new Date(response.data.release_date),
    });

    await movie.addPeople(people);
  } else {
    await movieResponse[0].addPeople(people);
  }
};

exports._setupDatabase = async () => {
  const characterUrls = new Set();
  try {
    const moviesResponse = await axios.get("https://swapi.dev/api/films");

    const fetchedMovies = moviesResponse.data;

    // Add unique characters's urls to the set
    fetchedMovies.results.forEach((film) => {
      film.characters.forEach((character) => {
        characterUrls.add(character);
      });
    });

    const characterUrlsArray = Array.from(characterUrls);

    for (let i = 0; i < characterUrlsArray.length; i++) {
      await _createPeopleCallHelper(characterUrlsArray[i]);
    }
  } catch (err) {}
};

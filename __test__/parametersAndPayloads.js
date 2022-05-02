exports.postFavoriteBody = {
  name: "fav999",
  ids: [1, 5, 6],
};

exports.postFavoriteResponse = {
  movieListName: "fav999",
  movies: [
    {
      id: 1,
      title: "A New Hope",
      releaseDate: "1977-05-25T00:00:00.000Z",
      createdAt: "2022-04-30T17:13:27.335Z",
      updatedAt: "2022-04-30T17:13:27.335Z",
    },
    {
      id: 5,
      title: "The Phantom Menace",
      releaseDate: "1999-05-19T00:00:00.000Z",
      createdAt: "2022-04-30T17:13:28.815Z",
      updatedAt: "2022-04-30T17:13:28.815Z",
    },
    {
      id: 6,
      title: "Attack of the Clones",
      releaseDate: "2002-05-16T00:00:00.000Z",
      createdAt: "2022-04-30T17:13:29.023Z",
      updatedAt: "2022-04-30T17:13:29.023Z",
    },
  ],
};

exports.getFavoritesResponse = {
  res: [
    {
      id: 4,
      movieListName: "fav4",
      movies: [
        {
          id: 5,
          title: "The Phantom Menace",
          releaseDate: "1999-05-19T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:28.815Z",
          updatedAt: "2022-04-30T17:13:28.815Z",
        },
        {
          id: 6,
          title: "Attack of the Clones",
          releaseDate: "2002-05-16T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:29.023Z",
          updatedAt: "2022-04-30T17:13:29.023Z",
        },
      ],
    },
    {
      id: 5,
      movieListName: "fav5",
      movies: [
        {
          id: 1,
          title: "A New Hope",
          releaseDate: "1977-05-25T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:27.335Z",
          updatedAt: "2022-04-30T17:13:27.335Z",
        },
        {
          id: 2,
          title: "The Empire Strikes Back",
          releaseDate: "1980-05-17T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:27.520Z",
          updatedAt: "2022-04-30T17:13:27.520Z",
        },
        {
          id: 5,
          title: "The Phantom Menace",
          releaseDate: "1999-05-19T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:28.815Z",
          updatedAt: "2022-04-30T17:13:28.815Z",
        },
        {
          id: 6,
          title: "Attack of the Clones",
          releaseDate: "2002-05-16T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:29.023Z",
          updatedAt: "2022-04-30T17:13:29.023Z",
        },
      ],
    },
    {
      id: 6,
      movieListName: "fav6",
      movies: [
        {
          id: 1,
          title: "A New Hope",
          releaseDate: "1977-05-25T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:27.335Z",
          updatedAt: "2022-04-30T17:13:27.335Z",
        },
        {
          id: 2,
          title: "The Empire Strikes Back",
          releaseDate: "1980-05-17T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:27.520Z",
          updatedAt: "2022-04-30T17:13:27.520Z",
        },
        {
          id: 3,
          title: "Return of the Jedi",
          releaseDate: "1983-05-25T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:27.709Z",
          updatedAt: "2022-04-30T17:13:27.709Z",
        },
        {
          id: 4,
          title: "Revenge of the Sith",
          releaseDate: "2005-05-19T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:27.889Z",
          updatedAt: "2022-04-30T17:13:27.889Z",
        },
        {
          id: 5,
          title: "The Phantom Menace",
          releaseDate: "1999-05-19T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:28.815Z",
          updatedAt: "2022-04-30T17:13:28.815Z",
        },
        {
          id: 6,
          title: "Attack of the Clones",
          releaseDate: "2002-05-16T00:00:00.000Z",
          createdAt: "2022-04-30T17:13:29.023Z",
          updatedAt: "2022-04-30T17:13:29.023Z",
        },
      ],
    },
  ],
};

exports.getFavoriteIdResponse = {
  responseObject: {
    id: 7,
    movieListName: "fav7",
    movies: [
      {
        id: 1,
        title: "A New Hope",
        releaseDate: "1977-05-25T00:00:00.000Z",
        createdAt: "2022-04-30T17:13:27.335Z",
        updatedAt: "2022-04-30T17:13:27.335Z",
      },
      {
        id: 2,
        title: "The Empire Strikes Back",
        releaseDate: "1980-05-17T00:00:00.000Z",
        createdAt: "2022-04-30T17:13:27.520Z",
        updatedAt: "2022-04-30T17:13:27.520Z",
      },
      {
        id: 3,
        title: "Return of the Jedi",
        releaseDate: "1983-05-25T00:00:00.000Z",
        createdAt: "2022-04-30T17:13:27.709Z",
        updatedAt: "2022-04-30T17:13:27.709Z",
      },
      {
        id: 4,
        title: "Revenge of the Sith",
        releaseDate: "2005-05-19T00:00:00.000Z",
        createdAt: "2022-04-30T17:13:27.889Z",
        updatedAt: "2022-04-30T17:13:27.889Z",
      },
      {
        id: 5,
        title: "The Phantom Menace",
        releaseDate: "1999-05-19T00:00:00.000Z",
        createdAt: "2022-04-30T17:13:28.815Z",
        updatedAt: "2022-04-30T17:13:28.815Z",
      },
      {
        id: 6,
        title: "Attack of the Clones",
        releaseDate: "2002-05-16T00:00:00.000Z",
        createdAt: "2022-04-30T17:13:29.023Z",
        updatedAt: "2022-04-30T17:13:29.023Z",
      },
    ],
  },
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_API_URL = `https://api.themoviedb.org/3/`;
const BASE_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${API_KEY}`
};

type PopularMoviesParams = {
  page: number;
};

function getPopularMovies(params: PopularMoviesParams = { page: 1 }) {
  const { page } = params;
  return fetch(`${BASE_API_URL}movie/popular?page=${page}`, {
    method: 'GET',
    headers: BASE_HEADERS
  })
    .then(res => res.json())
    .then(data => {
      return data;
    }
    )
    .catch(err => {
      console.log(err);
    }
    );
};


function findMovieByName(search: string) {
  return fetch(`${BASE_API_URL}search/movie?query=${search}`, {
    method: 'GET',
    headers: BASE_HEADERS
  })
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
}

function getMovieById(id: string) {
  return fetch(`${BASE_API_URL}movie/${id}`, {
    method: 'GET',
    headers: BASE_HEADERS
  })
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
}

export { getPopularMovies, findMovieByName, getMovieById };
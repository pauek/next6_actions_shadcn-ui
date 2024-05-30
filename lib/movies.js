
const URL = `https://api.themoviedb.org/3`;
const API_KEY = process.env.API_KEY;

export const serverSearchMovies = async (search) => {
  let url = `${URL}/discover/movie?api_key=${API_KEY}`;
  if (search) {
    url = `${URL}/search/movie?query=${search}&api_key=${API_KEY}`;
  }
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

export const clientSearchMovies = async (search) => {
  let url = `/api/movies`;
  if (search) {
    url = `/api/movies/search?query=${search}`;
  }
  const response = await fetch(url);
  return await response.json();
}

import axios from 'axios';

const API_KEY = 'd2588012985fa449416b0dc96cb20979';
const url = 'https://api.themoviedb.org/3/';

export async function getTrendingMovie() {
  try {
    const response = await axios.get(
      `${url}trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getSearchMovieList(query) {
  try {
    const response = await axios.get(
      `${url}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`
    );

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(
      `${url}movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCast(id) {
  try {
    const response = await axios.get(
      `${url}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `${url}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

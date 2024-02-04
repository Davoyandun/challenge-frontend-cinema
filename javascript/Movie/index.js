import get_movie from "../Services/get_movie.js";
import { createImag } from "../utils/utils.js";

const showMovieDetails = (movie) => {
  const imageContainer = document.getElementById("movie-image");
  const imgElement = createImag(movie);
  imageContainer.appendChild(imgElement);

  const titleElement = document.getElementById("movie-title");
  const movieNameElement = document.getElementById("movie-name");
  titleElement.textContent = movie.titleText.text;
  movieNameElement.textContent = movie.titleText.text;

  const durationElement = document.getElementById("movie-duration");
  durationElement.textContent = `${movie.runtime.seconds / 60} minutes`;

  const genresElement = document.getElementById("movie-genres");
  const genres = movie.genres.genres.map((genre) => genre.text).join(", ");
  genresElement.textContent = `${genres}`;

  const plotElement = document.getElementById("movie-plot");
  plotElement.textContent = `${movie.plot.plotText.plainText}`;
};

const movieId = new URLSearchParams(window.location.search).get("movieId");
get_movie(movieId).then((data) => {
  showMovieDetails(data);
});

import get_movies from "../Services/get-movies.js";
import { createImag } from "../utils/utils.js";

get_movies().then((data) => {
  data.map((movie) => {
    const container = document.createElement("div");
    container.className = "poster-container";
    const imgElement = createImag(movie);
    container.appendChild(imgElement);

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "View";
    buttonElement.className = "schedules";
    buttonElement.setAttribute("data-movie-id", movie.id);
    buttonElement.addEventListener("click", () => {
      window.location.href = `./movie.html?movieId=${movie.id}`;
    });
    container.appendChild(buttonElement);

    const element = document.getElementById("movie-list");
    element.appendChild(container);
  });
});

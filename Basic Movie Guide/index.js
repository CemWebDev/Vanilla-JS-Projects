const movieInput = document.querySelector("#movie-input");
const searchButton = document.querySelector("#search-button");
const resultContent = document.querySelector(".result");
const API_KEY = "fdee400";
const displayFeatures = () => {
  const movieName = movieInput.value;
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`;
  if (movieName.trim() === "") {
    resultContent.innerHTML = `
        <p class="empty-input">You must write a valid movie name!</p>
        `;
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response == "True") {
          console.log(data);
          resultContent.innerHTML = `
                <div class="movie-info">
                    <img src=${data.Poster} alt="movie-poster" id="movie-poster" />
                    <div class="header">
                        <h3 class="movie-title">${data.Title}</h3>
                        <div class="rating">
                            <span><i class="fa-solid fa-star" id="star-icon"></i> ${data.imdbRating}</span>
                        </div>
                    </div>
                </div>
                `;
        } else {
          resultContent.innerHTML = `<p class="error-message">${data.Error}</p>`;
        }
      })
      .catch((error) => {
        resultContent.innerHTML = `
            <h4>Error <i class="fa-solid fa-circle-exclamation" id="exclamation-icon"></i></h4>
            <p>You should check your connection or api key.</p>
            `;
      });
  }
};

searchButton.addEventListener("click", displayFeatures);

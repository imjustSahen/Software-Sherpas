const spotifyKey = "4f6b8c1863344e38a17d088b273aedb4";

const spotifyAPI = "https://api.spotify.com/v1/tracks/";


function getRecipe() {
  const recipeInfoAPI = `https://api.spotify.com/v1/recommendations/available-genre-seeds`;
  fetch(recipeInfoAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}



getRecipe();
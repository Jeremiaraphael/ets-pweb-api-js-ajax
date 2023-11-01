$(document).ready(function () {
  // Fetching data from the API using AJAX
  $.ajax({
    url: "https://it-its.id/api/movies",
    method: "GET",
    success: function (data) {
      displayMovies(data);
    },
    error: function (error) {
      console.error("Error fetching data: ", error);
    },
  });

  // Function to display movies
  function displayMovies(movies) {
    let output = "";

    $.each(movies, function (key, movie) {
      output += `
            <div class="col-sm-6 mb-4">
            <div class="shadow p-5 mb-2 bg-body-tertiary rounded">
                <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Plot}</p>
                </div>
            </div>
            </div>
            `;
    });

    $("#moviesList").html(output);
  }
});

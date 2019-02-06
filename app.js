//DOM
let main = document.getElementById("main");

//fetch data
fetch("https://ghibliapi.herokuapp.com/films")
  .then(function(response) {
    if (!response.ok) {
      console.error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    myJson.forEach(function(film) {
      let movie = document.createElement("div");
      movie.classList.add("movie", "border");
      main.appendChild(movie);
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      div1.innerText = film.title;
      div2.innerText = film.director + ", " + film.release_date;
      div3.innerText = film.description.substring(0, 400) + "...";
      div1.classList.add("title");
      div2.classList.add("director");
      div3.classList.add("description");
      movie.appendChild(div1);
      movie.appendChild(div2);
      movie.appendChild(div3);
    });
  })
  .catch(function(error) {
    console.error("Error: ", error);
  });

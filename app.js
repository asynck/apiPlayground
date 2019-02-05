fetch("https://ghibliapi.herokuapp.com/films")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        myJson.forEach( function(film) {
            console.log(film.title);
        });;
    })
    .catch(function(error) {
        console.error("Error: ", error);
    });
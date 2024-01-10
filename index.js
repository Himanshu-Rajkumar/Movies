let Movies = document.getElementById("Movies");
let Search = document.getElementById("search");
let container = document.getElementById("container");

Search.addEventListener("click", () => {
    // Here i am using trim to remove white spaces beggning and end of string.
    const searchTerm = Movies.value.trim();
    

    if (searchTerm === "") {
        alert("Please enter a movie title");
        return;
    }

    const apiKey = "f69a2a22"; 
    const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(searchTerm)}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            display(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

function display(movie) {
  
    container.innerHTML = '';

    if (movie.Response === "False") {
        alert("No results found");
    } else {
        let child = document.createElement("div");
        let Title = document.createElement("h1");
        let Year = document.createElement("h2");
        let Rated = document.createElement("h3");
        let Released = document.createElement("p");
        let Actor = document.createElement("p");
        let imdbRating = document.createElement("p");
        let Country = document.createElement("p");

        Title.innerText = "Title: " + movie.Title;
        Year.innerText = "Year: " + movie.Year;
        Rated.innerText = "Rated: " + movie.Rated;
        Released.innerText = "Released: " + movie.Released;
        Actor.innerText = "Actors: " + movie.Actors;
        imdbRating.innerText = "IMDB Rating: " + movie.imdbRating;
        Country.innerText = "Country: " + movie.Country;


        child.append(Title, Year, Rated, Released, Actor, imdbRating, Country);
        container.append(child);
    }
}




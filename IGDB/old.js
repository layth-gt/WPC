

//Make an API Request
//  URL, Path, Parameters, Method, Data Type

function getMovie (title) {
    var API_KEY = "a247461e";
    var baseURL = "http://www.omdbapi.com/";
    var parameters = `?apikey=${API_KEY}&t=${title}&plot=full`;
    var url = baseURL + parameters;
    return fetch(url);
    console.log (url);
}

//Turn received data into JSON
function turnIntoJSON(response) {
    return response.json();
}

//Display Data (create HTML using returned data)
function displayMovie(data) {
    if (data.Error) {
        throw new Error(data.Error);
        //this tells JS to:
        //  Go to the .catch handler
        //  It passes in the error message as the first parameter to the .catch handler (errorMessage in the scope of the error function)
    }
    var posterSource = data.Poster;
    var title = data.Title;
    var plot = data.Plot;
    var html = `
        <img src="${posterSource}">
        <h2>${title}</h2>
        <p>${plot}</p>
    `;
    var targetDiv = document.querySelector("#output");
    targetDiv.innerHTML = html;
    console.log (html);
}
//Error Handler

function errorHandler (errorMessage) {
    var html = `<h2>${errorMessage}</h2>`;
    var targetDiv = document.querySelector("#output");
    targetDiv.innerHTML = html;
    console.log (errorMessage);
}


//Add event handlers to start the requests

var form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault(); //Don't referesh the page!
    var input = document.querySelector(".movieTitle");
    var title = input.value;
    console.log(title);


getMovie(title)
    .then(turnIntoJSON)
    .then(displayMovie)
    .catch(errorHandler);

});
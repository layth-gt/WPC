//Get the player stats function
const targetDiv = document.querySelector("#output");
let allPlayers = [];

function getPlayerStats(playerName) {
  const API_KEY = "8J2LDOGO4LMSMXD0G8RMJWO2CHCXYGYC";
  const baseURL = "https://api.rocketleaguestats.com/v1/search/players";

  const url = `${baseURL}?apikey=${API_KEY}&display_name=${playerName} `;
  targetDiv.innerHTML = "Loading...";
  return fetch(url);
  console.log(url);
}

// //turn response to json
function turnIntoJSON(response) {
  return response.json();
}

function renderAllPlayers() {
  const playerMarkup = allPlayers.reduce(function(allHTML, currentPerson) {
    var html = `<h2>${currentPerson.displayName}</h2>
    <img src="${currentPerson.avatar}">
    <h3>Wins: ${currentPerson.wins}</h3>
    <h3>Goals: ${currentPerson.goals}</h3>
    <h3>MVPs: ${currentPerson.mvps}</h3>
    <h3>Saves: ${currentPerson.saves}</h3>
    <h3>Shots: ${currentPerson.shots}</h3>
    <h3>Assists: ${currentPerson.assists}</h3>`;
    return allHTML + html;
  }, "");
  var targetDiv = document.querySelector("#output");
  targetDiv.innerHTML = playerMarkup;
}

//html output
function displayPlayerStates(data) {
  if (data.message) {
    throw new Error(data.message);
  } else if (data.results === 0) {
    throw new Error("Sorry no results!");
  }

  console.log(data);

  var targetDiv = document.querySelector("#output");

  if (data.results === 1) {
    const playerData = data.data[0];
    //to replace the ps4 avatar
    if (playerData.avatar === null) {
      playerData.avatar =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGYM-k8LmkqNUCC_uEVT2TfVI4H_VwO9zChQbc660SM_Y4Ba-";
    }
    //add the player to the allplayers container to compair them later
    let playerProfile = {
      displayName: playerData.displayName,
      avatar: playerData.avatar,
      wins: playerData.stats.wins,
      goals: playerData.stats.goals,
      mvps: playerData.stats.mvps,
      saves: playerData.stats.saves,
      shots: playerData.stats.shots,
      assists: playerData.stats.assists
    };

    allPlayers.push(playerProfile);

    allPlayers = allPlayers.sort(function(a, b) {
      return b.wins - a.wins;
    });

    renderAllPlayers();

    console.log(allPlayers);
  } else {
    throw new Error(
      `There are ${data.totalResults} with that name, please be more precise`
    );
  }
}

//Error function
function errorHandler(errorMessage) {
  var html = `<h2>${errorMessage}</h2>`;

  targetDiv.innerHTML = html;
  console.log(errorMessage);
}

//function to run when search button pressed

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); //to prevent refreshing the page
  var input = document.querySelector(".player-id");

  console.log(input.value);
  var playerName = input.value;

  getPlayerStats(playerName)
    .then(turnIntoJSON)
    .then(displayPlayerStates)
    .catch(errorHandler);
});

var mvpButton = document.querySelector("#mvps");
mvpButton.addEventListener("click", function() {
  allPlayers = allPlayers.sort(function(a, b) {
    return b.mvps - a.mvps;
  });
  renderAllPlayers();
});

var winButton = document.querySelector("#wins");
winButton.addEventListener("click", function() {
  allPlayers = allPlayers.sort(function(a, b) {
    return b.wins - a.wins;
  });


  renderAllPlayers();
});



let rankValues = allPlayers.map(function(item,i){
  return item.mvps;
  
});

console.log(rankValues);




// var numbers = [3, 8, 45, 74, 123];
//     ratio = Math.max.apply(this, numbers) / 100;

// numbers = numbers.map(function (v) {
//     return Math.round( v / ratio );
// });

// alert(numbers);

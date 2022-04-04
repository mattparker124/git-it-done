const userFormEl = document.querySelector("#user-form");
const nameInputEl = document.querySelector("#username");

let getUserRepos = function(user) {

    // format the github api url
    const apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make the api call
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

let formSubmitHandler = function(event) {
    event.preventDefault();
    
    const username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a username");
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);
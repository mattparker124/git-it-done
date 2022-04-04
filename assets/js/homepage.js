let getUserRepos = function(user) {

    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make the api call
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getUserRepos("microsoft");
let getUserRepos = function() {
    fetch("https://api.github.com/users/mattparker124/repos").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
    console.log("outside");
};

getUserRepos();
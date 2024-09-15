/*
    Ashwin, Harshaan, Evan
    2021-01-28
    Highscores
    This is the code for the highscores
*/
// this page has access to variables in code.js (it uses code.js score variable)
// this page will get name and score and send to server and print table.
// Evan 21/01/08 5pm began coding the score system
// Evan 21/01/10 noon, added js function to display json array in table under game.
// Evan 21/01/12 7pm finished coding the score system
// Evan 21/01/14 11:20am expanded on comments to help with tracing through code
// Evan 21/01/17 7:00pm swaped from a server side sorting method to using bubblesorting
// Evan 21/01/19 11am set new variable for final score
// Evan 21/01/20 10am did documentaion
// Evan 21/01/21 8pm added else if so you can only submit score once per play
// Evan 21/01/23 5pm added check so you can only add score once per play of game

'use strict';

// on page load populate scores table below game to show all user scores
window.onload = getHighScores();

let submitCheck = 0; // Global variable, used to prevent you from submitting multiple times per play of game

// *****************************************************
// Custom Function for submitting high scores to server
// *****************************************************
function highScoreSubmit() {
    //submits js elements converted to json objects to server
    // UsernameEnter and UserScore are local variables as the function highScoreSubmit is the only object needs acsess to it. 
    let UsernameEnter = document.getElementById("userName").value; // local variable, holds the userName entered by user
    let UserScore = finalScore; // lexical variable, copys the final score variable from game to new variable of UserScore
    console.log("High score submitted:" + UsernameEnter + " , " + UserScore);

    document.getElementById('userName').value = '';

    //check if a name was entered, if game is over, trims name and capitalizes first leter
    if (UsernameEnter.length == 0) {
        alert("Please Enter a Name");
        return;
        // void return to break out of function
    } else if (lives !== 0) {
        alert("Please Finish the Game Before Subitting Your Score!")
        return;
        // void return to break out of function
    } else if (submitCheck == -1) {
        alert('Hey! Only Submit Your Name and Score Once!');
        return;
    } else {
        // *******************
        // String Methods Used 
        // *******************
        UsernameEnter = UsernameEnter.charAt(0).toUpperCase() + UsernameEnter.slice(1);
        console.log(UsernameEnter + "'s score is... " + UserScore);
    }

    // checks if game has been played and a score has been earned
    if (UserScore.length == 0) {
        alert("Please Earn a Score Before Submitting!");
        return;
    }

    // xml http request = xhr
    //send name and score to json file as json object
    // local variable xhr stores the request and response
    let xhr = new XMLHttpRequest(); // local variable 
    xhr.open("POST", "https://llama.cnerds.net/scores", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        console.log("POST Onload: ");
        console.log(xhr.response);
        let jsonResponse = JSON.parse(xhr.responseText); //local variable that holds the response from the server from the POST
        // do something with jsonResponse
        console.log("POST.onload: " + jsonResponse);

        document.getElementById('labelCheck').innerHTML = 'Your Score has been added!';

        bubbleSort(jsonResponse.scores);
        buildTable(jsonResponse.scores); // build table is a call on function below with the parameter as the xhr response array

        submitCheck = -1;
    };

    // on send it puts the UsernameEnter and UserScore into a json object to send when above XML Http Request is sent
    xhr.send(JSON.stringify({
        name: UsernameEnter,
        score: UserScore
    }));
}

// ************************************************
// Custom Function to get scores array from server
// ************************************************
function getHighScores() {
    //function to get the table back from server
    // local variable xhr stores the request and response
    let xhr = new XMLHttpRequest(); // local variable
    xhr.open("GET", "https://llama.cnerds.net/scores", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        let jsonResponse = JSON.parse(xhr.responseText); //local variable that holds the response from the server
        // do something with jsonResponse
        console.log("Get high scores: " + JSON.stringify(jsonResponse.scores));
        // return jsonResponse.scores;
        bubbleSort(jsonResponse.scores); // sorts array in decending order
        buildTable(jsonResponse.scores); // build table is a call on function below with the parameter as the xhr response array
    };
    xhr.send();
}

// *************************************************************
// Custom Function to build table with given array as parameter
// *************************************************************
function buildTable(data) {
    // this function requires JQUERY
    // function populates table referenced with json objects
    let table = document.getElementById('HighScoreTableBody') // local variable
        // table is local as it is only needed in this function

    $("#HighScoreTableBody").empty();

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td style="text-align: center;">${i + 1 + "."}</td>
                        <td style="text-align: right;">${data[i].score}</td>
                        <td style="text-align: left; border-left: transparent solid 20px;" class="nameStyle">${data[i].name}</td>
                    </tr>`
        table.innerHTML += row
    }
    console.log("Build table trigered: ");
    // build table console.log is to see when table is 'refreshed/rebuilt'
}

//************************************************************************************************************
//Use of bubble sorting to sort all scores in a decending order and keep the name with the corresponding score
//************************************************************************************************************
function bubbleSort(array) {
    // temp variable are local scope
    let temporaryNumber = 0; //local variable to hold a temporary number for bubble sort
    let temporaryName = ""; //local variable to hold a temporary name value for bubble sort to keep things together
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length - 1; y++) {
            if (parseInt(array[y].score) < parseInt(array[y + 1].score)) {
                // sorts score in decending order
                temporaryNumber = array[y + 1].score;
                array[y + 1].score = array[y].score;
                array[y].score = temporaryNumber;

                // keeps names with coresponding score (with out this names wouldnt sort and scores would get asigned to diffrent names)
                temporaryName = array[y + 1].name;
                array[y + 1].name = array[y].name;
                array[y].name = temporaryName;
            }
        }
    }
    return array;
}
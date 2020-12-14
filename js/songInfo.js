/**
 * This script will get the song information from the serverside and put it in arrays
 * that can be accessed globally.
 * 
 * gotSongs will be used to check if database connection was successful or not.
 * 
 * Uses XMLHttpRequest
 */

//arrays to store song info
var songNames = []; 
var songArtists = [];
var songLengths = []; //will be in 00:04:26.000 format as example.
var songMP3s = []; //used to store just the mp3 names of the songs.
var songMP3FilePaths = []; //used to store the full file path of the songs on the server.
var gotSongs = false; //used to know if was unable to connect to database to get songs.

//create the listener for alert
function reqListener(){
    console.log(this.responseText);
}

//new request object
var oReq = new XMLHttpRequest();

//action of what will happen when getting data from getSongs.php if successful.
oReq.onload = function(){
    //data is in this.responseText.
    //We will handle what we need to do with this data here.

    //parse JSON string into javascript array of objects. Song 1 is songs[0]..., etc.
    var songs = JSON.parse(this.responseText);


    //place song data into seperate arrays.
    songs.forEach(function (song) {
        songNames.push(song.name);
        songArtists.push(song.artist);
        songLengths.push(song.length);
        songMP3s.push(song.mp3);
        songMP3FilePaths.push("assets/songs/".concat(song.mp3));
    });

    gotSongs = true;
    
};

//initialize the request to get data from getSongs.php
//is using synchronous with third param being false instead of true 
//and will prevent everything else below this line from
//executing until request is complete.
//This ensures that the song data is able to be accessed outside the scope of oReq.onload
//in a global way.
//If the request does fail, an alert will be displayed as gotSongs will stay false.
oReq.open("get", "php/getSongs.php", false);

//send the request for data
oReq.send();

//will check to see if connection to database was successful and song information was gotten.
if (gotSongs == false){
    alert("Check to see if password is set to connect to database");
}
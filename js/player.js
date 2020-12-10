/**
 * Uses song information from songInfo.js to make a simple media player that will
 * re loop through the songs when they are done playing.
 * Uses variables from songInfo.js:
 *      songNames[]
 *      songArtists[] 
 *      songMP3FilePaths[]
 */

const song = document.querySelector('#audio_controller'); //the audio object in home.html
const artist = document.querySelector('#nameOfArtist'); //the element where the artist will be displayed.
const songName = document.querySelector('#nameOfSong'); //the element where the name of the song will be displayed.


index = 0; //index to be used for songMP3FilePaths array.

//set the first song to play and display the artist and song name.
song.src = songMP3FilePaths[0];
artist.innerHTML = "Artist: ".concat(songArtists[0]);
songName.innerHTML = "Song: ".concat(songNames[0]);

function play(){
    //re get the song to play
    const song = document.querySelector('#audio_controller');

    song.play();
}


//if at end of song, go to next song.
song.addEventListener('ended', function(){
    nextSong();
});

//Will go to next song when current song is done playing by increasing index to use in
//songMP3FilePaths array and setting that song file path as the src for the song audio object.
function nextSong(){
    index++;
    
    //check to see if last song ended. If so, loop back to first song
    //by resetting index back to 0.
    if (index > songMP3FilePaths.length-1){
        index = 0;
    }

    //set next song
    song.src = songMP3FilePaths[index];

    //set artist and song name to display
    artist.innerHTML = "Artist: ".concat(songArtists[index]);
    songName.innerHTML = "Song: ".concat(songNames[index]);

    //play song
    play();
} 
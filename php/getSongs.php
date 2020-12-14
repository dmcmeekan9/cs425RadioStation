<?php
  //This php file gets the songs from the database.

  include_once 'connectToDB.php';
  include_once 'queries.php';

    //connect to db, will return with connection if connection was established correctly.
    $con = connect(); //from connectToDB.php

    //run and get query result with connection.
    $res = getSongsTable($con); //from queries.php

    //initialize empty array to hold song info
    $songsArray = array();

    //get song information from result
    $i = 0;
    while ($i < $res->num_rows){
      $r = $res->fetch_assoc();

      //song info
      $songName = $r['sName'];
      $songArtist = $r['sArtist'];
      $songLength = $r['sLength'];
      $songMP3 = $r['sMP3'];

      //store song info in array
      $song = array(
        "name" => $songName,
        "artist" => $songArtist,
        "length" => $songLength,
        "mp3" => $songMP3
      );

      //add song to songsArray
      array_push($songsArray, $song);

      $i++;
    }


    //print songs information
    //for testing.
    //uncomment whatever you need if you need to test getting values.
  /*  for ($j=0; $j<count($songsArray); $j++){
      $s = $songsArray[$j];
  //   echo implode(" ", $s); //use for testing
  //   echo "\n";
      echo $s['name'] . "\t" . $s['artist'] . "\t" . $s['length'] . "\t" . $s['mp3'];
      echo "\n";
    } */
    

    // close the connection
    $con->close();

    echo json_encode($songsArray);
  
?>

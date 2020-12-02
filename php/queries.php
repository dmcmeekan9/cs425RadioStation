<?php
    //This php file houses queries to run in database.

    /**
     * Gets the song table
     */
    function getSongsTable($con){
        $q = "SELECT * FROM songs;";
        $res = $con->query($q);

        return $res;
    }


    
    
?>
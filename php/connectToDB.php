<?php
    //This php file connects to a given database with a user name and password.

    /**
     * Connects to the database
     */
    function connect(){
        //connection parameters
        $server_name = "localhost";
        $user = "adminer"; //add user name
        $pass = "";  //add your password
        $db = "RadioStation";

        //Try to connect
        $con = new mysqli($server_name, $user, $pass, $db);

        if ($con->connect_error)
            die("connection error");

        //else return connection
        return $con;
    }
  

?>
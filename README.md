# cs425 Radio Station
## Dennis McMeekan and Brandon Ahrens
This is a repo that is made for the creation of a very 
simple radio station.

Radio station will play songs continuously in order. Songs are stored on server side with the 
song information in a database.

This is a final project for CS 425: Server Side Web Development.

Aspects Used:
* Turnkey LAMP
* HTML5
* PHP
* JavaScript
* Apache
* MySQL
* SVG
* AngularJS


## How to use:
* Boot your server (Turnkey LAMP as example)
* From your root directory, place files in var/www/Your_chosen_directory using winscp or any other ftp service.
* Navigate to php/connectToDB.php and put your username and password in for your server to access the database.
* Source in the .sql file from databae/db.sql by accessing MySql from CLI and typing 'source db.sql'
* Once all this is done, navigate to Your_chosen_directory in your server in your chosen web browser and enjoy the music or add your own!

## Screenshots:
![Screenshot of home page:](https://github.com/dmcmeekan9/cs425RadioStation/blob/main/screenshots/homepage.jpg "home page")
![Screenshot of about page:](https://github.com/dmcmeekan9/cs425RadioStation/blob/main/screenshots/aboutpage.jpg "about page")
![Screenshot of home page error prompt:](https://github.com/dmcmeekan9/cs425RadioStation/blob/main/screenshots/error.jpg "home page error prompt")



## To do:
* [] Improve Security (encryption)
* [x] Optimize Performance
* [] Select song list functionality
* [] Exapnd song library

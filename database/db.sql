CREATE DATABASE RadioStation;

USE RadioStation;

--make table for songs
CREATE TABLE songs
(sID INT(6) NOT NULL,
sName VARCHAR(50) NOT NULL,
sArtist VARCHAR(20) NOT NULL,
sLength TIME(3) NOT NULL,
sMP3 VARCHAR(50) NOT NULL,
CONSTRAINT songs_PK PRIMARY KEY (sID),
CONSTRAINT CHK_Cust CHECK (sID > 0));

--insert values
INSERT INTO songs
VALUES (000001, 'Lana Del Dre', 'Tep No', 350, 'LanaDelDre_TepNo.mp3');

INSERT INTO songs
VALUES (000002, 'Up In Flumes [NCS Release]', 'T-Mass', 328, 'TMass_UpInFlumes.mp3');

INSERT INTO songs
VALUES (000003, 'We Rise', 'San Holo', 426, 'SanHolo_WeRise.mp3');


DROP TABLE lightsabers;
DROP TABLE characters;

-- Create the table structure
CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    darkside BOOLEAN,
    age INT
);

CREATE TABLE lightsabers (
    id SERIAL PRIMARY KEY,
    hilt_metal VARCHAR(20),
    colour VARCHAR(20),
    character_id INT REFERENCES characters(id)
);

-- Adding rows to the table
INSERT INTO characters(name, darkside, age) VALUES ('Obi-Wan Kenobi', false, 27);
INSERT INTO characters(name, darkside, age) VALUES ('Anakin Skywalker', false, 19);
INSERT INTO characters(name, darkside, age) VALUES ('Darth Maul', true, 32);

-- Adding a row when some data is missing
INSERT INTO characters(name, darkside) VALUES ('Yoda', true);

-- Updating two columns (name, darkside) to true for only the row with the name specified
UPDATE characters SET (name, darkside) = ('Darth Vader', true) WHERE name = 'Anakin Skywalker';


-- Practice Exercise 
INSERT INTO characters(name, darkside, age) VALUES ('Luke Skywalker', false, 17);
UPDATE characters SET age = 65 WHERE name = 'Obi-Wan Kenobi';


-- Delete a row
DELETE FROM characters WHERE name = 'Darth Maul'; 

SELECT * FROM characters;


-- Practice Exercise - add and delete a character
INSERT INTO characters (name, darkside, age) VALUES ('Baby Yoda', false, 50);
SELECT * FROM characters;

DELETE FROM characters WHERE name = 'Baby Yoda';
SELECT * FROM characters;


INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);

UPDATE characters SET age = 26 WHERE name = 'Stormtrooper' and ID = 7;

SELECT * FROM characters;

INSERT INTO lightsabers (hilt_metal, colour, character_id) VALUES ('palladium', 'green', 4);
INSERT INTO lightsabers (hilt_metal, colour, character_id) VALUES ('gold', 'red', 2);
INSERT INTO lightsabers (hilt_metal, colour, character_id) VALUES ('silver', 'blue', 4);

SELECT * FROM lightsabers;

-- Listing the Lightsabers belonging to Yoda
SELECT * FROM lightsabers WHERE character_id = 4;

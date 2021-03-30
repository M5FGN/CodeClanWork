-- Drop tables if they already exist
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

-- Create tables
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description VARCHAR,
    duration INT, 
    completed BOOLEAN,
    user_id INT REFERENCES users(id)
);


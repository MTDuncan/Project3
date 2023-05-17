-- schema.sql

CREATE DATABASE IF NOT EXISTS events_db;

USE events_db;

CREATE TABLE IF NOT EXISTS ToDoEvents (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    weekday VARCHAR(10),
    is_completed BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

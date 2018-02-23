DROP DATABASE IF EXISTS thumbnails;
CREATE DATABASE thumbnails;

\c thumbnails;

CREATE TABLE items (
  ID INT PRIMARY KEY,
  title VARCHAR(300),
  rating SMALLINT,
  reviews SMALLINT,
  price SMALLINT,
  prime BOOLEAN,
  category VARCHAR(30),
  realtive_path VARCHAR(30)
);

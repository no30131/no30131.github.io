/* Assignment 4: Design Table Schema (Advanced Optional) */

/*1. Write an SQL statement to select all articles with their author’s email.*/
SELECT article.*, user.email 
FROM article 
INNER JOIN user 
ON article.author = user.username;

/*2. Write another SQL statement to select articles from 7th to 12th sorted by id.*/
SELECT *
FROM article
WHERE id
BETWEEN 7 AND 12;
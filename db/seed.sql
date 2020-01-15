-- create users tables
CREATE table users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(40) NOT NULL,
hash TEXT,
first_name VARCHAR
)

--create reviews table
CREATE table reviews (
    review_id SERIAL PRIMARY KEY,
    category_name VARCHAR(40),
    brand VARCHAR(200),
    content VARCHAR(1000),
    user_id INT REFERENCES users(user_id)
    product VARCHAR
)

-- checkForUsername
SELECT * FROM users
WHERE username = $1;
 
-- registerUser
INSERT INTO users (username, hash, first_name)
VALUES ($1, $2, $3);
 
 --getAllReviews 
 SELECT * from reviews; 

-- addReview 
INSERT INTO reviews (category_name, brand, product, content, user_id)
VALUES ($1, $2, $3, $4, $5)
 
-- getReviewsByUser

SELECT category_name, brand, content, product 
FROM reviews
INNER JOIN users
ON reviews.user_id=users.user_id
 
 
-- editReview
UPDATE reviews
SET
 brand = $1,
 product = $2,
 content = $3,
 user_id = $4,
WHERE review_id = $5;
 
 
-- deleteReview
DELETE FROM reviews
WHERE review_id = $1;
 
-----------------###-------------not mvp 
-- getReviewsByCategory 
SELECT * FROM reviews
WHERE category_name = $1;


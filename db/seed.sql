-- create users tables
CREATE table users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(40) NOT NULL,
hash TEXT
)

--create reviews table
CREATE table reviews (
    review_id SERIAL PRIMARY KEY,
    category_name VARCHAR(40),
    title VARCHAR(200),
    content VARCHAR(1000),
    user_id INT REFERENCES users(user_id)
)

-- checkForUsername
SELECT * FROM users
WHERE username = $1;
 
-- registerUser
INSERT INTO users (username, hash)
VALUES ($1, $2);
 
 --getAllReviews 
 SELECT * from reviews; 

-- addReview 
INSERT INTO reviews (category_name, title, content, user_id)
VALUES ($1, $2, $3, $4)
 
-- getReviewsByUser

SELECT * FROM reviews
WHERE username = $1;
 
 
-- editReview
UPDATE reviews
SET
 title = $1,
 content = $2,
 user_id = $3,
WHERE review_id = $4;
 
 
-- deleteReview
DELETE FROM reviews
WHERE review_id = $1;
 
-----------------###-------------not mvp 
-- getReviewsByCategory 
SELECT * FROM reviews
WHERE category_name = $1;

-- dummy data 

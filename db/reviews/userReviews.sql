SELECT review_id, username, category_name, brand, content, product, first_name 
FROM reviews
INNER JOIN users
ON reviews.user_id=users.user_id
WHERE users.user_id = $1
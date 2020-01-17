UPDATE reviews
SET
category_name = $1,
 brand = $2,
 product = $3,
 content = $4,
 user_id = $6
WHERE review_id = $5;
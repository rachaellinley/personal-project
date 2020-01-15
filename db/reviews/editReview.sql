UPDATE reviews
SET
 brand = $1,
 product = $2,
 content = $3,
 user_id = $5
WHERE review_id = $4;
UPDATE reviews
SET
 brand = $1,
 content = $2
WHERE review_id = $3 and user_id = $4;
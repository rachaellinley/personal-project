UPDATE reviews
SET
 title = $1,
 content = $2,

WHERE review_id = $4;
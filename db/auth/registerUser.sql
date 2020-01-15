INSERT INTO users (username, hash, first_name)
VALUES ($1, $2, $3)
RETURNING *;
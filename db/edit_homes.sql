UPDATE homeins SET first_name = $2, last_name = $3, address = $4, city = $5, state = $6, zipcode = $7, user_id = $8
WHERE home_id = $1
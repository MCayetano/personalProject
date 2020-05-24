UPDATE autoins SET license = $1, year = $2, make = $3, model = $4, vin = $5, user_id = $6
WHERE vin = $5;
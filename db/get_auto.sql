SELECT name, email, license, year, make, model, vin 
FROM users u JOIN autoins a
ON u.user_id = a.user_id
WHERE a.user_id = $1
SELECT u.name, u.email, a.license, a.year, a.make, a.model, a.vin 
FROM users u JOIN autoins a
ON u.user_id = a.user_id
WHERE a.user_id = $1;
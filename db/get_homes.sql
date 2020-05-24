SELECT name, email, address, city, state, zip
FROM users u JOIN homeins h
ON u.user_id = h.user_id
WHERE h.user_id = $1
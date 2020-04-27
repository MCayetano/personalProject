INSERT INTO homeins (first_name, last_name, address, apt, city, state, zipcode, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM homeins;
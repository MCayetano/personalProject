INSERT INTO autoins (first_name, last_name, address, year, make, model, vin_id, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM autoins;
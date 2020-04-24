INSERT INTO autoins (address, year, make, model, vin_id, user_id)
VALUES
($1, $2, $3, $4, $5, $6);

SELECT * FROM autoins;
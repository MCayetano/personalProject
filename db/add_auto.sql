INSERT INTO autoins (license, year, make, model, vin, user_id)
VALUES
($1, $2, $3, $4, $5, $6);

SELECT * FROM autoins;
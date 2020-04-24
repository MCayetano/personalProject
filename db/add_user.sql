INSERT INTO users (username, hasehd_password, email)
VALUES
($1, $2, $3);

SELECT * FROM users WHERE email = $3;
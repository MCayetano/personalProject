CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    hashed_password TEXT,
    email VARCHAR(32)
);


INSERT INTO users (username, hashed_password, email)
VALUES
('luis1989', 'redlight', 'luis123@gmail.com'),
('lidiahig', 'greenlight', 'lidia123@gmail.com'),
('cellhamilton', '123123', 'cellhamilton456@gmail.com'),
('richardLopez', 'setonhall', 'rLopez789@gmail.com'),
('Marco1990', 'helpme', 'marco90@gmail.com')


CREATE TABLE autoins (
    auto_id SERIAL PRIMARY KEY,
    address TEXT,
    year NUMERIC,
    make TEXT,
    model TEXT,
    vin_id NUMERIC,
    user_id INT REFERENCES users(user_id)

);

INSERT INTO autoins (year, make, model, vin_id)
VALUES
(2004, 'Honda', 'Civic', 01984959843390948),
(2010, 'Kia', 'Sorento', 04857218459876235),
(2019, 'Honda', 'Accord', 84839502938457892),
(2015, 'Toyota', 'Camry', 22309485748932456),
(2020, 'Rolls Royce', 'Drophead', 45456767892342353)


CREATE TABLE homeins(
    home_id SERIAL PRIMARY KEY,
    address TEXT,
    apt NUMERIC,
    city TEXT,
    state TEXT,
    zipcode NUMERIC,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO homeins (address, apt, city, state, zipcode)
VALUES
('2020 lakewood dr', 'New York', 'NY', 10004),
('505 park ave', 'New York', 'NY', 10028),
('5050 Broadway ave', 'New York', 'NY', 10312),
('220 Parkhill ave', 'Staten Island', 'NY', 10304),
('155 osgood ave', 'Staten Island', 'NY', 10304)


 


CREATE  TABLE commercial (
    commercial_ID SERIAL PRIMARY KEY,
    address TEXT,
    apt NUMERIC,
    city TEXT,
    state TEXT,
    zipcode NUMERIC,
    business_type TEXT,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO commercial (address, apt, city, state, zipcode, business_type)
VALUES
('108 Long Pond Ave', '236', 'Queens', 'NY', '10138', 'Landscaper'),
('555 lexington ave', '656', 'New York', 'NY', '12129', 'Carpenter')
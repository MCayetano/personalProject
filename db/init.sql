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
    first_name TEXT,
    last_name TEXT,
    address TEXT,
    year NUMERIC,
    make TEXT,
    model TEXT,
    vin_id NUMERIC,
    user_id INT REFERENCES users(user_id)

);

INSERT INTO autoins (first_name, last_name, address, year, make, model, vin_id)
VALUES
('Luis', 'Savery', '2020 lakewood dr', 2004, 'Honda', 'Civic', 01984959843390948),
('Lidia', 'Higinio', '505 park ave', 2010, 'Kia', 'Sorento', 04857218459876235),
('Cellus', 'Hamilton', '5050 Broadway ave', 2019, 'Honda', 'Accord', 84839502938457892),
('Richard', 'Lopez', '220 Parkhill ave', 2015, 'Toyota', 'Camry', 22309485748932456),
('Marco', 'Cayetano', '155 osgood ave', 2020, 'Rolls Royce', 'Drophead', 45456767892342353)


CREATE TABLE homeins(
    home_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    address TEXT,
    apt NUMERIC,
    city TEXT,
    state TEXT,
    zipcode NUMERIC,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO homeins (first_name, last_name, address, city, state, zipcode)
VALUES
('Luis', 'Savery', '2020 lakewood dr', 'New York', 'NY', 10004),
('Lidia', 'Higinio', '505 park ave', 'New York', 'NY', 10028),
('Cellus', 'Hamilton', '5050 Broadway ave', 'New York', 'NY', 10312),
('Richard', 'Lopez', '220 Parkhill ave', 'Staten Island', 'NY', 10304),
('Marco', 'Cayetano', '155 osgood ave', 'Staten Island', 'NY', 10304)


 


CREATE  TABLE commercial (
    commercial_ID SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zipcode NUMERIC,
    business_type TEXT,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO commercial (first_name, last_name, address, apt, city, state, zipcode, business_type)
VALUES
('Dre', 'Billman', '108 Long Pond Ave', 'Queens', 'NY', 10138, 'Landscaper'),
('jamezz', 'Mckinney', '555 lexington ave', 'New York', 'NY', 12129, 'Carpenter')
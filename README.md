## InsureMeNow: a leadgenerator for Insurance Agencies

</hr>

MVP
- users to have personal accounts
- multiple listings, multiple reviews for those listings
- bathrooms stored in db
- users can add new bathroosm to our db
- bathrom listings have pictures, addresses, and reviews
- users can add new comments
- users can edit/ratings
- users can remove comments


ICEBOX
- incorporate google maps API for restrooms
- users can sve their favorite list of restrooms
- people who own restrooms can pay us money to falsify thier reviews

### **DB**
-Tables (schema)
    -users
    -autoins
    -property
    -commercial


```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    hashed_password TEXT,
    email VARCHAR(32)
);
```

```SQL
CREATE TABLE autoins (
    auto_id SERIAL PRIMARY KEY,
    address TEXT,
    year NUMERIC,
    make TEXT,
    model TEXT,
    vin_id NUMERIC,
    user_id INT REFERENCES users(user_id)

);
```

```SQL
CREATE TABLE homeins(
    home_id SERIAL PRIMARY KEY,
    address TEXT
    user_id INT REFERENCES users(user_id)
)
``` 

```SQL
CREATE  TABLE commercial (
    commercial_ID SERIAL PRIMARY KEY,
    adddress TEXT,
    business_type TEXT,
    user_id REFERENCES users(user_id)
)



## **Server**
- massive
-express
-dotenv
-express-session
-bcrypt

endPoints: address or preprogrammed tasked server knows what to ask, if your a restaraunt your front end is the person ordering food and your server is your waiter and your kitchen is your database. your endpoints are like the menu

-authCtrl:
    -login: /auth/login
    -register: /auth/register
    -logout: /auth/logout
    -userSession: /auth/user_session

-insuranceCtrl:
    -(app.get) getautoins: /api/get_autoins
    -(app.get) gethomeins: /api/get_homeins
    -(app.get) getcommercial: /api/get_commercial
    -(app.post) postautoins: /api/add_autoins
    -(app.post) posthomeins: /api/add_homeins
    -(app.post) postcommercial: /api/add_commercial
    -(app.delete) deleteautoins: /api/delete_autoins/:id
    -(app.delete) deletehomeins: /api/delete_homeinsins/:id
    -(app.delete) deletecommercial: /api/delete_commercial/:id
    -(app.put) editautoins: /api/edit_autoins/:id
    -(app.put) edithomeins: /api/edit_homeins/:id
    -(app.put) editcommercial: /api/edit_commercial/:id
    -(app.post) addautoins: /api/add_autoins
    -(app.post) addhomeins: /api/add_homeins
    -(app.post) addcommercial: /api/add_commercial

## **Client** (front-end)
dependecies:
- axios
- redux
- react-redux
- react-promise-middleware
- react-router-dom


file structure:
- src/
    - App.js
    - App.css
    - reset.css
    - index.js
    - components
        - Header.js/.css
        - Card.js/.css
        - reviewForm.js/.css
        - Login.js/.css
        - Main.js/.css
    - redux
        - store
        - reducer

routes:
- main: /s
- login: /login
- bathroom: /bathroom/:id
- form: /form



const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
require('dotenv').config()


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const {login, register , logout, getUser} = require('./controllers/authCtrl');
const {getAuto, addAuto, deleteAuto, editAuto} = require('./controllers/autoCtrl');
const{getHomes, addHomes, deleteHomes, editHomes} = require('./controllers/homeCtrl');
const{getCommercial, addCommercial, deleteCommercial, editCommercial} = require('./controllers/commercialCtrl');



massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db is good over here')
}).catch(err => console.log('db is NOT good', err))


app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie : {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))


//authorization

app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/logout', logout);
app.get('/auth/user_session', getUser);

//auto 
app.get('/api/auto', getAuto);
app.post('/api/auto', addAuto);
app.put('/api/auto/:vin', editAuto);
app.delete('/api/auto/:id', deleteAuto);

//home
app.get('/api/homes', getHomes);
app.post('/api/homes', addHomes);
app.put('/api/homes/:id', editHomes);
app.delete('/api/homes/:id', deleteHomes);

//commercial
app.get('/api/commercial', getCommercial);
app.post('/api/commercial', addCommercial);
app.post('api/commercial/:id', editCommercial);
//     -(app.delete) deletecommercial: /api/delete_commercial/:id


app.listen(SERVER_PORT, () => console.log(`straight fire on ${SERVER_PORT}`))
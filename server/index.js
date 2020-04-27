const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
require('dotenv').config()


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const {login, register , logout, userSession} = require('./controllers/authCtrl');
const {getAuto, addAuto, deleteAuto, editAuto} = require('./controllers/autoCtrl');
const{getHomes, addHomes, deleteHomes, editHomes} = require('./controllers/homeCtrl');


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db is good over here')
}).catch(err => console.log('db is NOT good'))


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
app.get('/auth/user_session', userSession)

//auto 
app.get('/api/auto', getAuto);
app.post('/api/auto', addAuto);
app.put('/api/auto/:id', editAuto);
// app.delete('/api/auto/:id', deleteAuto);

//home
app.get('/api/homes', getHomes);
app.get('/api/homes', addHomes);



// -insuranceCtrl:
//     -(app.get) getcommercial: /api/get_commercial
//     -(app.post) posthomeins: /api/add_homeins
//     -(app.post) postcommercial: /api/add_commercial

//     -(app.delete) deletehomeins: /api/delete_homeinsins/:id
//     -(app.delete) deletecommercial: /api/delete_commercial/:id

//     -(app.put) edithomeins: /api/edit_homeins/:id
//     -(app.put) editcommercial: /api/edit_commercial/:id

//     -(app.post) addhomeins: /api/add_homeins
//     -(app.post) addcommercial: /api/add_commercial



app.listen(SERVER_PORT, () => console.log(`straight fire on ${SERVER_PORT}`))
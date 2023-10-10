require("dotenv").config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 5001 || process.env.PORT;

//create session!

app.use(session({
    secret: 'tomboys',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) }
    
}));

//Initialise passport  
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//method Override
app.use(methodOverride("_method"))

//Connect to database
connectDB();

//static files
app.use(express.static('public'));

//Templating engine
app.use(expressLayouts);
app.set('layout','./layout/main');
app.set('view engine','ejs');

//Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/dashboard'));


//Handle 404
app.get('*', function(req, res) {
    // res.status(404).send('404 Page not found!')
    res.status(404).render('404');
})
//listen

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})
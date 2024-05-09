
const path= require('path')
const express = require('express')
const morgan= require('morgan')
const { engine } = require('express-handlebars');
const methodOverride= require('method-override')
const { helpers } = require('handlebars');
const session= require('express-session')
var passport= require('passport')
var FacebookStrategy= require('passport-facebook').Strategy

const app = express()
const port = 3000;
const router = require('./routes')
const db= require('./config/db')
const sortMiddleware= require('./app/middleware/sortMiddleware')
const middleware= require('./app/middleware/index')

//connect database
db.connect();

//Session ---- Login
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(passport.initialize())
app.use(passport.session());

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
  });
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

passport.use(new FacebookStrategy({
    clientID: '1786778678491002',
    clientSecret: 'c4ed85c63f31186101683cc5c73f8e56',
    callbackURL: "https://6ab8-2402-800-631c-75ab-ca82-ff9b-a9ca-59b.ngrok-free.app/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
},
function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    return cb(null, profile);
}
));

// HTTP logger
app.use(morgan('combined'));

//Use File Public
app.use(express.static(path.join(__dirname,'public')))

//use middleware 
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//config app
app.use(methodOverride('_method'))

app.use(sortMiddleware)
app.use(middleware.loadHeaderData)
app.use(middleware.loadSlide)

//route -> render views
router(app)

//config last name file handlebar
// app.engine(
//     '.hbs', 
//     engine({
//         extname: '.hbs',
//         helpers:{
            
//         }
//     }));
app.engine(
    '.hbs',
    engine({
        extname: 'hbs',
        helpers: {
            sum: (a,b) => a + b,
            sortable: (field, sort)=>{
                const sortType = field === sort.col ? sort.type: 'default'
                const icons={
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                }
                const types={
                    default:'desc',
                    asc: 'desc',
                    desc: 'asc',
                }

                const type= types[sortType]
                const icon= icons[sortType]
                
                return `<a href="?_sort&col=${field}&type=${type}">
                    <span class="${icon}"></span>
                    </a>`
            },
        }
    }),
);


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

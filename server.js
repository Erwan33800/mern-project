const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const app = express();


// middleware qui permet de lire le body de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// middleware qui permet de lire les cookies
app.use(cookieParser());

// jwt
app.get('*', checkUser); // check sur n'importe quelle route si user est connecté
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).json({user: res.locals.user._id});
}) // requireAuth permet de vérifier si user est connecté

//routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

//server
app.listen(process.env.PORT, () => {
    console.log('Listenning on port ' + process.env.PORT)
});
//create required modules
var express = require('express');
var routes = require('./routes');
var path = require('path');

//create actual express application
var app = express();
//set the view engine to ejs
app.set('view engine', 'ejs');

//set the path of static assets in express application
app.use(express.static(path.join(__dirname, 'public')));

//Routes

//home
app.get('/', routes.home);

//movie single
app.get('/star_wars_episode/:episode_number?', routes.movies_single);

//not found
app.get('*', routes.notFound);

//have express application listen
app.listen(process.env.PORT || 3000);

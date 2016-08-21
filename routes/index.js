var moviesJSON = require('../movies.json');

//home
exports.home = function(request, response){

  //get JSON of movies
  var movies = moviesJSON.movies;

  //by default express will look into 'views' folder, don't even have to specify .ejs extension.
  response.render('home', {
    title : "Star Wars Movies",
    movies : movies
  });
};

//movie single
exports.movies_single = function(request, response){

  //get JSON of movies
  var movies = moviesJSON.movies;
  //get variable from URL
  var episode_number = request.params.episode_number;

  //only process for 'valid episode range'
  if (episode_number >= 1 && episode_number <= 6){
    //get movie referenced by episode number, along with other properties
    var movie = movies[episode_number-1];
    var title = movie.title;
    var main_characters = movie.main_characters;

    //by default express will look into 'views' folder, don't even have to specify .ejs extension.
    response.render('movie_single', {
      movies : movies,
      title : title,
      movie : movie,
      main_characters : main_characters
    });
  }
  else{
    response.render('notFound', {
      movies : movies,
      title : "This is not the page you are looking for."
    });
  }
};

//not found
exports.notFound =  function(request, response){

  //get JSON of movies
  var movies = moviesJSON.movies;

  response.render('notFound', {
    movies : movies,
    title : "This is not the page you are looking for."
  });
};

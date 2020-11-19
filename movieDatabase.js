var favoriteMovie = {
    'title' : 'Cleopatra',
    'duration' : 192,
    'stars' : ['Puff', 'Jackie', 'Living Sneezes']
};
function movieInfo(movie){
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}
movieInfo(favoriteMovie);
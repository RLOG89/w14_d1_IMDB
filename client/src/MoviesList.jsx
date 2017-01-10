var React = require('react');
var Movie = require('./Movie.jsx')

var MoviesList = React.createClass({
  render: function() {
    var movieNodes = this.props.data.map(function(movie) {
      return(
        <Movie showtimes={movie.showtimes} key={movie.id}> {movie.movie} </Movie>
      );
    });
    return(
      <div className='movies-list'>
        {movieNodes}
      </div>
      );
  }
}); 

module.exports = MoviesList;

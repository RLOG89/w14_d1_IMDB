var React = require('react');
var Movie = require('./Movie.jsx')

var MoviesList = React.createClass({
  render: function() {
    var movieNodes = this.props.data.map(function(movie) {
      return(
        <Movie key={movie.id} title= {movie.title} showtimes={movie.showtimes} > </Movie>
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

var React = require('react')

var MovieButton = React.createClass({
  render: function() {
    var url = 'http://www.imdb.com/'
    return(
      <a href={url}><button className='movie-button'>
        View All Movies
      </button></a>
    );
  }
});

module.exports = MovieButton
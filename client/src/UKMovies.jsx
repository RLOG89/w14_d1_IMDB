var React = require('react');
var MoviesList = require('./MoviesList.jsx')
var Movie = require('./Movie.jsx')
var MovieButton = require('./MovieButton.jsx')

var sampleData = [
  {id:1, movie: 'Sausage Party', showtimes: '10.00am, 7.00pm'},
  {id:2, movie: 'Cafe Society', showtimes: '3.00pm, 8.30pm'},
  {id:3, movie: 'Morgan', showtimes: '5.00pm'},
  {id:4, movie: 'The 9th Life of Louis Drax', showtimes: '10.00pm, 11.00pm'},
  {id:5, movie: 'Naam Hal Akira', showtimes: '1.00pm'}
]

var UKMovies = React.createClass({
  getInitialState: function() {
    return {data: sampleData}
  },
  render: function() {
    return (
      <div className='uk-movies'>
        <h2>UKMovies</h2>
        <MoviesList data={this.state.data} />
        <Movie />
        <MovieButton />
      </div>
    );
  }
});

module.exports = UKMovies;
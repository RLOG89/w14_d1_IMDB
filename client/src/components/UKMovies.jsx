var React = require('react');
var MoviesList = require('./MoviesList.jsx')
var Movie = require('./Movie.jsx')
var MovieButton = require('./MovieButton.jsx')

var sampleData = [
  {id:1, title: 'Sausage Party', showtimes: '10.00am, 7.00pm'},
  {id:2, title: 'Cafe Society', showtimes: '3.00pm, 8.30pm'},
  {id:3, title: 'Morgan', showtimes: '5.00pm'},
  {id:4, title: 'The 9th Life of Louis Drax', showtimes: '10.00pm, 11.00pm'},
  {id:5, title: 'Naam Hal Akira', showtimes: '1.00pm'}
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
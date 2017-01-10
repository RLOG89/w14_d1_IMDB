var React = require('react');

var Movie = React.createClass({
  render: function() {
    return(
      <div className='movie'>
        <h3>{this.props.title}</h3>
        <li className='showtimes'>
        {this.props.showtimes}
        </li>
      </div>
    );
  }
});

module.exports = Movie;

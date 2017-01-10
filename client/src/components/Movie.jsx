var React = require('react');

var Movie = React.createClass({
  render: function() {
    return(
      <div className='movie'>
        <h3 className='showtimes'>
        {this.props.showtimes}
        </h3>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Movie;

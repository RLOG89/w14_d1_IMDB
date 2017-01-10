var React = require('react');
var ReactDOM = require('react-dom');
var UKMovies = require('./UKMovies.jsx')

window.onload = function(){
  ReactDOM.render(
    <UKMovies />, 
    document.getElementById('app')
  );
}

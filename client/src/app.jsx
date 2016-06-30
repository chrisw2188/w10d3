var React = require('react');
var ReactDOM = require('react-dom');
var BankingBox = require('./components/BankingBox.jsx')

window.onload = function(){
  ReactDOM.render(
    <BankingBox />,
    document.getElementById('app')
  );
}

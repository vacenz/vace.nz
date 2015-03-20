'use strict';

var React = require('react');
var Table = require('./components/table.js');

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var APP = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>React Server Rendering</title>
        </head>
        <body>
          <Table products={PRODUCTS} />
          <script src='public/bundle.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = APP;

if(typeof window !== 'undefined') {

  // just for giving us React dev tools in the browser
  window.React = require("react");

  window.onload = function() {
    React.render(APP(), document);
  }
};
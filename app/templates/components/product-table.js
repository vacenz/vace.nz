'use strict'
var React = require('react');
var ProductRow = require('./product-row.js');

var ProductTable = React.createClass({
    render: function() {
        
    var rows = this.props.products.map(function (p, i) {
      if (p.name.indexOf(this.props.filterText) === -1 || (!p.stocked && this.props.inStockOnly)) {
         return <span></span>;
      }

      return (
          <ProductRow product={p} key={p.name} />
      );
    }.bind(this));

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

module.exports = ProductTable;
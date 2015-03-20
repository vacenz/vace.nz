'use strict'

var React = require('react');
var SearchBar = require('./search-bar.js');
var ProductTable = require('./product-table.js');

var Table = React.createClass({
    getInitialState: function() {
        return {
            filterText: '',
            inStockOnly: false
        };
    },

    handleUserInput: function(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },

    render: function() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly}
                           onUserInput={this.handleUserInput} />

                <ProductTable filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}
                              products={this.props.products} />
            </div>
        );
    }
});

module.exports = Table;
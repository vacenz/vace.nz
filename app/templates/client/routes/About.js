React = require('react');
var Banner = require('../elements/Banner/Banner.js');

var About = React.createClass({
	render: function() {
		return (
      <SiteBoilerPlate>
        <Banner bannerMessage="About Us"/>
      </SiteBoilerPlate>
		);
	}
});

module.exports = About;

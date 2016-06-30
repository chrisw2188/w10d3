var React = require('react');

var BankingTotal = React.createClass({
	render: function() {
		return (
			<div className="total-display">
				<h3>Total Cash in Bank: <span>£</span>{this.props.total.toFixed(2)}</h3>
			</div>
		)
	}
});

module.exports = BankingTotal;

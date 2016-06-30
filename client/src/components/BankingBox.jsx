var React = require('react');

var Accounts = require('./Accounts');
var BankingForm = require('./BankingForm');
var BankingTotal = require('./BankingTotal');
var SampleAccounts = require('../sample_accounts.js')

var BankingBox = React.createClass({
	getInitialState: function() {
		return {
			accounts: SampleAccounts
		};
	},

	getBankingTotal: function(accounts) {
		var total = 0;
		accounts.forEach(function(account) {
			total += account.amount
		})
		return total
	},

	filterAccounts: function(type) {
		var accounts = this.state.accounts.filter(function(account) {
			return account.type === type;
		});
		return accounts
	},

	addAccount: function(e) {
		var newAccounts = this.state.accounts.concat([e]);
		this.setState({accounts: newAccounts})
	},

	deleteAccount: function(owner) {
		var filteredAccounts = this.state.accounts.filter(function(account) {
			return account.owner != owner;
		})
		this.setState({accounts: filteredAccounts})
	},

	render: function() {
		return (
			<div className="main-display">
				<h2> Royal Bank </h2>
				<BankingTotal
					total={this.getBankingTotal(this.state.accounts)}
				/>
				<Accounts
					accounts={this.filterAccounts("Personal")}
					total={this.getBankingTotal(this.filterAccounts("Personal"))}
					deleteThisSucka={this.deleteAccount}
				/>
				<Accounts
					accounts={this.filterAccounts("Business")}
					total={this.getBankingTotal(this.filterAccounts("Business"))}
					deleteThisSucka={this.deleteAccount}
				/>
			<BankingForm addAccount={this.addAccount}/>
			</div>
		)
	}
})

module.exports = BankingBox;

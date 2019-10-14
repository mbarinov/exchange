import React from 'react';
import {connect} from 'react-redux';

import {accountsActions} from 'ducks/accounts'

import logo from './logo.svg';
import './App.css';

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a href="#" className="App-link" onClick={() => {
					console.log('fetchAccounts');
					props.fetchAccounts();
				}}>fetch</a>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, accountsActions)(App);
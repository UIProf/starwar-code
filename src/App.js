import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main';

export default class App extends Component{
    render() {
		return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
		);
	}
}

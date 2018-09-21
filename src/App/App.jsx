import React, { Component } from 'react';
import logo from '../ving.jpeg';
import './App.css';
import { Quotes } from '../data/quotes';
import RandomQuote from '../RandomQuotes/RandomQuote.jsx';
import RadioButtons from '../RadioButtons/RadioButtons.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hackaton for Payments and CRM</h1>
          <h2 className="App-title">ʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ</h2>
        </header>
        <div className="content">
          <p className="App-intro" />
          <RandomQuote quotes={Quotes} />
          <div style={{ margin: '200px 0' }} />
          <RadioButtons />
          <div style={{ margin: '200px 0' }} />
        </div>
      </div>
    );
  }
}

export default App;

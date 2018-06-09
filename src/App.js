import React, { Component } from 'react';
import Picker from './Picker.js';
import Information from './Information';

import './App.css';

const perWeek = 92.05;

class App extends Component {

  state = {
    wentOffSick: new Date()
  };

  render() {
    return (
      <div>
        <header>
          <h1>Statutory Sick Pay Calculator</h1>
        </header>

        <Picker label="First day of your sickness absence: "/>
        <Information date={this.state.wentOffSick} perWeek={perWeek} />

        <footer>
          <h2>Disclaimer</h2>
          This tool is for convenience only and we make every effort, but no guarantees, as to its accuracy.
          Please check with <a href="https://www.gov.uk/statutory-sick-pay">the government</a> before making any decisions based on Statutory Sick Pay.
        </footer>
      </div>
    );
  }
}

export default App;

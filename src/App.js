import React, { Component } from 'react';

import Picker from './Picker';
import Information from './Information';

import './App.css';

import {SSP_PER_WEEK} from './constants';

class App extends Component {

  state = {
    wentOffSick: new Date()
  };

  changeDate = (event) => {
    this.setState({wentOffSick: event.target.value});
  }

  render() {
    return (
      <div>
        <header>
          <h1>Statutory Sick Pay Calculator</h1>
        </header>

        <Picker
          label="First day of your sickness absence: "
          handler={this.changeDate}
          date={this.state.wentOffSick}/>
        
        <Information
          inputDate={this.state.wentOffSick}
          perWeek={SSP_PER_WEEK}/>

        <footer>
          <h2>Disclaimer</h2>
          <p>This tool is for convenience only and we make every effort, but no guarantees, as to its accuracy.</p>
          <p>Please check with <a href="https://www.gov.uk/statutory-sick-pay">the government</a> before making any decisions based on Statutory Sick Pay.</p>
        </footer>
      </div>
    );
  }
}

export default App;

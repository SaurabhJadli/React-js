import React, { Component } from 'react';
import './App.css';
import OnClick from './OnClick';
import OnDuobleClick from './OnDuobleClick';
import OnHover from './OnHover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='heading'>Event Hendling</h1>

        <OnClick />
        <OnDuobleClick />
        <OnHover />

      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { Card, CardSection, Input } from './common';
import './App.css';
import AccountWrapper from './components/AccountWrapper';
import Test from './components/test';

class App extends Component {
  render() {
    return (
      <Card>
        {/* <Test /> */}
        <AccountWrapper mode="new" />
      </Card>
    );
  }
}

export default App;

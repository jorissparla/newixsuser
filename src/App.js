import React, {Component} from 'react';
import { Card, CardSection, Input } from './common'
import './App.css'
import AccountWrapper from './components/AccountWrapper'

class App extends Component {
  render() {
    return (
      <Card >
        <AccountWrapper mode='new' />
      </Card>
    );
  }
}

export default App;
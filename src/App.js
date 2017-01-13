import React, {Component} from 'react';
import { Card, CardSection, Input } from './common'
import './App.css'
import big from '../assets/big.jpg'
import small from '../assets/small.jpg'
import GoLiveList from './components/GoLiveList'

class App extends Component {
  render() {
    return (
      <Card >
        <GoLiveList />
      </Card>
    );
  }
}

export default App;
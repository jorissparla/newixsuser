import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import AccountContainer from './AccountContainer';

class Test extends Component {
  state = {};
  render() {
    console.log(this.props);

    return (
      <h3>
        <AccountContainer />
      </h3>
    );
  }
}

export default Test;

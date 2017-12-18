import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class AccountContainer extends Component {
  state = {};
  render() {
    const { data: { teams, locations, newguests, loading, error } } = this.props;
    if (loading) return <div>Loading...</div>;
    console.log(this.props);
    return <div>{newguests.length}</div>;
  }
}

const AllDataQuery = gql`
  query {
    teams {
      key
      description
    }
    locations {
      key
      description
    }
    newguests {
      firstname
      lastname
      login
      email
      navid
    }
  }
`;

export default graphql(AllDataQuery)(AccountContainer);

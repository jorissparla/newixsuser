import React, { useState } from 'react';
import { render } from 'react-dom';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
//import ApolloClient from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Select from 'react-select';
import styled from 'styled-components';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://nlbavwixs.infor.com:4000' }),
  cache: new InMemoryCache()
});

const QUERY_SUPPORT_FOLKS = gql`
  query QUERY_SUPPORT_FOLKS {
    newguests {
      id
      login
      firstname
      lastname
      navid
    }
    supportfolks {
      fullname
      image
      navid
    }
    locations {
      id
      value: key
      label: description
    }
    teams {
      id
      value: key
      label: description
    }
  }
`;

export const niceblue = '#40a5ed';
export const babyblue = '#ecf6fd';
export const twitterblue = '#1da1f2';
const StyledSelect = styled(Select)`
  font-family: Roboto;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 3px;
`;

const AvImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 48px;
  height: 48px;
  font-family: Roboto;
  border-radius: 50%;
  background: pink;
  color: white;
  margin-right: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
`;
const Single = styled.div`
  display: flex;
  margin: 5px;
  background: #252525;
  color: white;
  border-radius: 5px;
  padding: 3px;
`;

export const Button = styled.a`
  display: inline-block;
  min-width: 150px;
  width: ${props => (props.width ? props.width : '150px')};
  height: 40px;
  padding: 4px 7px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid
    ${props => (props.bordercolor ? props.bordercolor : props.color ? props.color : niceblue)};
  text-decoration: none;
  color: ${props => (props.color ? props.color : niceblue)};
  font-family: 'Segoe UI', Roboto;
  font-size: 1em;
  background: transparent;
  -webkit-transition: all 0.45s;
  transition: all 0.45s;
  text-align: center;
  line-height: 36px;
  margin: 8px;

  :hover {
    background: ${props => (props.color ? props.color : niceblue)};
    color: white;
  }
`;

export const Papier = styled.div`
  color: black;
  background-color: #eee;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin: 5px;
  min-width: 200px;
  padding: 10px;
  left: 20%;
  top: 20%;
  position: absolute;
`;
console.log(Query);
client.query({ query: QUERY_SUPPORT_FOLKS }).then(result => console.log(result));

function ImageOrInitials({ image, initials }) {
  return image ? <Avatar src={image} /> : <AvImg>{initials}</AvImg>;
}

function Test(props) {
  const {
    data: { value, label, image }
  } = props;
  const initials = label
    .split(' ')
    .map(l => l.slice(0, 1))
    .join('')
    .toUpperCase();
  return (
    <Wrapper {...props.innerProps}>
      <ImageOrInitials image={image} initials={initials} />
      {label}
    </Wrapper>
  );
}

function Options(props) {
  <Wrapper {...props.innerProps}>{props.data.label}</Wrapper>;
}
function SingleValue(props) {
  console.log(props);
  return <Single {...props.innerProps}>{props.children}</Single>;
}

function Index() {
  const [team, setTeam] = useState('');
  const [location, setLocation] = useState('');
  const [user, setUser] = useState('');
  return (
    <Query query={QUERY_SUPPORT_FOLKS}>
      {({ data, loading, error }) => {
        console.log('data');
        if (loading) return 'Loading';
        if (error) return 'error';
        //return <div>Hallo</div>;
        console.log('data', data);
        const { supportfolks, newguests, locations, teams } = data;
        const sfoptions = supportfolks.map(person => ({
          value: person.navid,
          label: person.fullname,
          image: person.image
        }));
        const options = newguests.map(guest => ({
          value: guest.navid,
          label: guest.firstname + ' ' + guest.lastname
        }));

        return (
          <Papier>
            <StyledSelect
              placeholder="Select a new user from the list"
              options={options}
              onChange={e => setUser(e.value)}
            />
            <StyledSelect
              placeholder="Select a team from the list"
              options={teams}
              onChange={e => setTeam(e.value)}
            />
            <StyledSelect
              placeholder="Select a location"
              options={locations}
              onChange={e => setLocation(e.value)}
            />
            <StyledSelect
              placeholder="Select a new user from the list"
              options={sfoptions}
              components={{ Option: Test, SingleValue }}
              onChange={e => console.log(e)}
            />
            <Button>Save Entry</Button>
            {team}:{location}:{user}
          </Papier>
        );
      }}
    </Query>
  );
}

const x = () => (
  <Query query={QUERY_SUPPORT_FOLKS}>
    {({ data, loading, error }) => {
      console.log('data');
      if (loading) return 'Loading';
      if (error) return 'error';
      return <div>Hallo</div>;
      console.log('data', data);
      return <div>{JSON.stringify(data.supportfolks)}</div>;
    }}
  </Query>
);

function App() {
  return (
    <ApolloProvider client={client}>
      <Index />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('rootNewIXSUser'));

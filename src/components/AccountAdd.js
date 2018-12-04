import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import { CardSection, Input } from '../common';
import NewUserList from './NewUsers';
<<<<<<< HEAD
import { Title } from './title';

import {
  TextField,
=======

import {
  TextField,

>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
  //AutoComplete,
  SelectField
} from 'redux-form-material-ui';

//const mappedUsers = users.map(({login, firstName, lastName}) => { return {key: login, description: `${firstName} ${lastName}` }})
const mapUsers = users =>
  users.map(({ login, firstName, lastName }) => {
    return { key: login, description: `${firstName} ${lastName}` };
  });

<<<<<<< HEAD
const regions = ['EMEA', 'APJ', 'NA', 'LA'];
=======
const regions = ['EMEA', 'APJ', 'NA'];
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
//console.log('mappedUsers',mappedUsers)

const buttonStyle = {
  backgroundColor: '#ffc600',
  labelColor: 'white',
  margin: '20px'
};
const buttonStyle2 = {
  backgroundColor: 'black',
  labelColor: 'white',
  margin: '20px'
};

const dataSourceConfig = {
  text: 'description',
  value: 'key'
};

const required = value => (value == null ? 'Required' : undefined);
const email = value =>
<<<<<<< HEAD
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;

const { func, string } = React.PropTypes;

const AutoComplete = ({ input, meta: { touched, error }, dataSourceConfig, ...rest }) => (
=======
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);

const { func, string } = React.PropTypes;

const AutoComplete = ({
  input,
  meta: { touched, error },
  dataSourceConfig,
  ...rest
}) => (
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
  <MUIAutoComplete
    {...input}
    {...rest}
    dataSourceConfig={dataSourceConfig}
    onNewRequest={value => input.onChange(value[dataSourceConfig.value])}
    errorText={touched && error}
  />
);

let AccountAddForm = React.createClass({
  propTypes: {
    handleSubmit: func,
    fetchTeams: func,
    fullName: string
  },
  componentDidMount() {},

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      validate,
      teams,
      users,
      locations
    } = this.props;
    const mappedUsers = mapUsers(users);
    console.log('reset', reset, handleSubmit);
    return (
      <div>
<<<<<<< HEAD
        <Title>Add New User</Title>
=======
        <CardSection style={{ fontSize: '36px', fontFamily: 'Oswald' }}>
          Add New User
        </CardSection>
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
        <form onSubmit={handleSubmit(this.props.onSave)}>
          <CardSection>
            <Field
              name="login"
              component={AutoComplete}
              openOnFocus={true}
              floatingLabelText="Start typing to find name (Login)"
              dataSource={mappedUsers}
              onClick={e => console.log('onclickw', e, this)}
              filter={AutoComplete.caseInsensitiveFilter}
              dataSourceConfig={dataSourceConfig}
              maxSearchResults={5}
              underlineShow={false}
              floatingLabelStyle={{ fontSize: '15px', marginLeft: '5px' }}
            />
          </CardSection>
          <Divider />
          <CardSection>
            <Field
              name="firstName"
              floatingLabelText="First Name"
              component={Input}
              type="text"
              style={{ paddingRight: '20px' }}
            />

            <Field
              name="lastName"
              floatingLabelText="Last Name"
              component={Input}
              style={{ paddingRight: '20px' }}
            />
          </CardSection>
          <Divider />
          <CardSection>
            <Field name="navid" floatingLabelText="Navigator Id" component={Input} />
            <Field
<<<<<<< HEAD
=======
              name="navid"
              floatingLabelText="Navigator Id"
              component={Input}
            />
            <Field
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
              name="fullName"
              floatingLabelText="Full Name"
              component={Input}
              type="text"
              onClick={() => {
                console.log(this.refs);
              }}
            />
          </CardSection>
          <Divider />
          <CardSection>
            <Field name="email" floatingLabelText="Email" component={Input} type="text" />
            <Field
<<<<<<< HEAD
=======
              name="email"
              floatingLabelText="Email"
              component={Input}
              type="text"
            />
            <Field
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
              name="team"
              component={AutoComplete}
              openOnFocus={true}
              floatingLabelText="Start typing to find Team"
              onNewRequest={value => {
                console.log('AutoComplete ', value); // eslint-disable-line no-console
              }}
              onClick={e => console.log(this, e.target.value)}
              dataSource={teams}
              dataSourceConfig={dataSourceConfig}
              underlineShow={false}
            />
          </CardSection>
          <Divider />
          <CardSection>
            <Field
              name="location"
              component={AutoComplete}
              openOnFocus={true}
              floatingLabelText="Type Location"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={locations}
              dataSourceConfig={dataSourceConfig}
              maxSearchResults={5}
              underlineShow={false}
            />

            <Field
              name="region"
              component={AutoComplete}
              openOnFocus={true}
              floatingLabelText="region"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={regions}
              underlineShow={false}
            />
          </CardSection>
          <Divider />
          <CardSection>
            <RaisedButton
              primary={true}
              style={buttonStyle}
<<<<<<< HEAD
              label={`Submit to ${env.SERVER}`}
=======
              label="Submit"
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
              type="submit"
            />
            <RaisedButton
              secondary={true}
              style={buttonStyle2}
              label="Cancel"
              onClick={this.props.onCancel}
              type="reset"
            />
          </CardSection>
        </form>
        <Divider />

<<<<<<< HEAD
        {/* <CardSection style={{ width: '600px'}}>
        <NewUserList users={mappedUsers} />
      </CardSection>
      */}
      </div>
    );
  }
});

=======
        <CardSection style={{ width: '600px' }}>
          <NewUserList users={mappedUsers} />
        </CardSection>

      </div>
    );
  }
});

>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
AccountAddForm = reduxForm({
  form: 'newixsuser',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
<<<<<<< HEAD
=======

>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
  // a unique identifier for this form
})(AccountAddForm);

const selector = formValueSelector('newixsuser');

AccountAddForm = connect(state => {
  const login = selector(state, 'login');
  const user = state.main.newusers.find(user => user.login === login);
  console.log('user', user);
  //if (!user) return {}

  let { firstName, lastName, navid, region } = user || {
    firstName: selector(state, 'firstName'),
    lastName: selector(state, 'lastName'),
    navid: selector(state, 'navid'),
    region: 'EMEA'
  };
  if (!firstName) firstName = '';
  if (!lastName) lastName = '';
  return {
    initialValues: {
      firstName,
      lastName,
      navid,
      region: region || 'EMEA',
      fullName: firstName + ' ' + lastName,
      email: `${firstName}.${lastName}@infor.com`
    }
  };
})(AccountAddForm);

export default AccountAddForm;

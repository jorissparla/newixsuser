import React from 'react';
<<<<<<< HEAD
import Dialog from 'material-ui/Dialog';
=======
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
import { connect } from 'react-redux';
import {
  fetchTeams,
  fetchLocations,
  fetchGuests,
  fetchNewUsers,
  updateGuest,
  fetchAllUsers
} from '../actions';
import AccountAdd from './AccountAdd';
import { dispatch } from 'redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Snackbar from 'material-ui/Snackbar';
import AlertDialog from './AlertDialog';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const style = {
  margin: '12px',
  padding: '20px',
  display: 'flex',
  flexGrow: '0.4',
  justifyContent: 'space-around'
};

const AccountWrapper = React.createClass({
  getInitialState() {
    return {
      open: false,
<<<<<<< HEAD
      err: '',
      showsubmit: false,
      values: ''
=======
      err: ''
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
    };
  },
  componentDidMount() {
    this.props.fetchTeams().then(() => {
      let err = 'You are not authorized';
<<<<<<< HEAD
=======

>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
      //this.setState({ open: true, err:err})
    });
    this.props.fetchLocations();
    this.props.fetchGuests();
    this.props.fetchNewUsers();
    this.props.fetchAllUsers();
    console.log('mode', this.props.mode);
  },
  doSubmit(values) {
<<<<<<< HEAD
    this.setState({
      values: JSON.stringify(values, null, 2),
      showsubmit: true
    });
=======
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
    window.alert(`You submitted Parent:\n\n${JSON.stringify(values, null, 2)}`);
    this.props
      .updateGuest(values)
      .then(data => {
        console.log('success', data);
<<<<<<< HEAD
        let err = !data.payload.message ? 'success' : data.payload.message;
        this.setState({ open: true, err: err }).then(() => {});
=======

        //let err = (!data.payload.message) ? 'success' : data.payload.message

        //this.setState({ open: true, err:err})
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
      })
      .catch(error => console.log('error', error));
    console.log('Submit', values);
  },

  doCancel(values) {
    window.location.href = '/';
  },

  render() {
    const { teams, locations, guests, newusers, mode, accounts } = this.props;
<<<<<<< HEAD
    if (this.state.err) return <AlertDialog message={this.state.err} url="/" />;
=======
    if (this.state.err)
      return <AlertDialog message={this.state.err} url="/ixs" />;
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
    if (!newusers || !teams || !guests || !newusers) return <div>Loading</div>;
    // create list of new entries in account table
    const unmappedGuests = guests.map(guest => guest.login);
    // filter inforxtreme accounts to limit to only new entries in account table
    const unmappedUsers = newusers.filter(user => {
      let isUserFound = unmappedGuests.indexOf(user.login);
      if (isUserFound >= 0) return true;
      else return false;
    });
    return (
      <div>
        <AccountAdd
          teams={teams}
          locations={locations}
          users={unmappedUsers}
          onSave={this.doSubmit}
          onCancel={this.doCancel}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.err}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        <Dialog open={this.state.showsubmit}>
          {this.state.values}
          <RaisedButton
            primary={true}
            label="Close"
            onClick={() => this.setState({ showsubmit: false })}
          />
        </Dialog>
      </div>
    );
  }
});

const mapStateToProps = state => {
  return {
    teams: state.main.teams,
    locations: state.main.locations,
    guests: state.main.guests,
    newusers: state.main.newusers,
    accounts: state.main.accounts
  };
};

export default connect(mapStateToProps, {
  fetchTeams,
  fetchLocations,
  fetchGuests,
  fetchNewUsers,
  updateGuest,
  fetchAllUsers
})(AccountWrapper);

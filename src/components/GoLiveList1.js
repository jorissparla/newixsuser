import React from 'react';
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { fetchGoLives } from '../actions'
import moment from 'moment'
import small from '../../assets/small.jpg'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';

const getDay = date => moment(date).format('MMM').toUpperCase().substr(0, 3) + moment(date).format('DD')

class GoLiveList extends React.Component {

  componentDidMount () {
    this.props.fetchGoLives()
  }
  
  renderGoLives(golives) {
    const {iconStyle, avatarStyle, dateStyle}= styles
    return golives.map(item => {
      return (
        <TableRow>
          <TableRowColumn style={dateStyle}>{getDay(item.date)}</TableRowColumn>
          <TableRowColumn>{item.customerid}</TableRowColumn>
          <TableRowColumn>{item.customername}</TableRowColumn>
          <TableRowColumn>{item.comments}</TableRowColumn>
        </TableRow>
      )
    })
  }

  render () {
    const { golives } = this.props
    const {listStyle, subheaderStyle} = styles
    if (!golives[0]) {
      return <div>Loading</div>
    }
    return (
      <Table>
      <TableHeader style={{ backgroundColor: '#ededed'}}>
        <TableHeaderColumn style={{ fontSize: '20px', width:'40px'}}>Date</TableHeaderColumn>
        <TableHeaderColumn style={{ fontSize: '20px', width:'40px'}}>AccountId</TableHeaderColumn>
        <TableHeaderColumn>Customer</TableHeaderColumn>
        <TableHeaderColumn>Comments</TableHeaderColumn>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        stripedRows={true}
      
      >
        {this.renderGoLives(golives)}
        </TableBody>
      </Table>
    )
  } 
}

const styles = {
  listStyle: {
    backgroundColor: 'white',
    marginRight: 20
  },
  subheaderStyle : { 
    fontSize: 48, 
    fontFamily: 'Billabong',
    marginLeft: 20,
    marginTop: 20,
    padding: 10
  },
  iconStyle :{ 
    marginRight: 20, 
    alignSelf: 'flex-start',
    padding: 20
  },
  avatarStyle: {
    flexDirection: 'column', 
    fontSize: 10, 
    width: '50px',
    justifyContent:'center'
  },
  dateStyle: {
      fontSize: '24px',
  fontWeight: '900'
  }
}
const mapStateToProps = (state) => {
  console.log('STATE', state)
  return {golives: state.golives.all}
}

export default connect(mapStateToProps, {fetchGoLives})(GoLiveList)

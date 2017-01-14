import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import './NewUsers.css'



const NewUserList =({users}) => {
  console.log('users', users )
    return (
      <List>
        <Subheader>Available</Subheader>
        <Divider/>
        {users.map(user => 
          <div key={user.key} className='litem'>
          <ListItem  style={{ width: '600px'}} primaryText={`${user.description}  (${user.key})`} />
           <Divider />
           </div>
          )}
      </List>
    )
  }

export default NewUserList
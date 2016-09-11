import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import { darkBlack } from 'material-ui/styles/colors'

export default React.createClass({
  render () {
    return (
      <div>
        <List>
          <Subheader>Notes</Subheader>
          <ListItem
            primaryText='My first note'
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>10/12/2016</span> --
                Testing 1,2,3...
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider />
          <ListItem
            primaryText='My second note'
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>09/12/2016</span> --
                Batata frita!
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider />
        </List>
      </div>
    )
  }
})

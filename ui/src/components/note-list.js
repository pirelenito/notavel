import React from 'react'
import {List, ListItem, MakeSelectable} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import { darkBlack } from 'material-ui/styles/colors'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Search from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'

const SelectableList = MakeSelectable(List)

export default React.createClass({
  render () {
    return (
      <div>
        <Menu>
          <MenuItem leftIcon={<Search />}>
            <TextField hintText='Search' fullWidth />
          </MenuItem>
        </Menu>

        <SelectableList value={1}>
          <Subheader>Notes</Subheader>
          <ListItem
            value={0}
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
            value={1}
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
        </SelectableList>
      </div>
    )
  }
})

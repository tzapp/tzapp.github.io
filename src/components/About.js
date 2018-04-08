import React, { Fragment } from 'react'
import Header from './header'
import { List, ListItem, ListItemText, ListSubheader } from 'material-ui'

const About = () => {
    return (
        <Fragment>
            <Header title="About" backButton />
            <List
                subheader={<ListSubheader>Database</ListSubheader>}
            >
                <ListItem component="a" href="http://finalfantasy.wikia.com/wiki/Final_Fantasy_Wiki" target="_blank">
                    <ListItemText primary="Final Fantasy Wiki" secondary="For Bestiary data" />
                </ListItem>
                <ListItem component="a" href="  http://finalfantasy.wikia.com/wiki/Final_Fantasy_Wiki" target="_blank">
                    <ListItemText primary="Final Fantasy Wiki" secondary="For Bestiary data" />
                </ListItem>
            </List>


        </Fragment>
    )
}

export default About

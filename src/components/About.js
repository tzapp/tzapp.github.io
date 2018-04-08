import React, { Fragment } from 'react'
import Header from './header'
import { List, ListItem, ListItemText, ListSubheader } from 'material-ui'

const About = () => {
    return (
        <Fragment>
            <Header title="About" backButton />
            <List element="nav"
                subheader={<ListSubheader>Database and Help</ListSubheader>}
            >
                <ListItem component="a" href="http://finalfantasy.wikia.com/wiki/Final_Fantasy_Wiki" target="_blank">
                    <ListItemText primary="Final Fantasy Wiki" secondary="For Bestiary data" />
                </ListItem>
                <ListItem component="a" href="https://gamefaqs.gamespot.com/ps2/939426-final-fantasy-xii-international-zodiac-job-system/faqs/49691" target="_blank">
                    <ListItemText primary="Split Infinity" secondary="For the awesome FAQ" />
                </ListItem>
                <ListItem component="a" href="http://ff12maps.com/" target="_blank">
                    <ListItemText primary="FF12 Maps" secondary="For inspiration and some gamedata" />
                </ListItem>
            </List>


        </Fragment>
    )
}

export default About

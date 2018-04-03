import React, { Fragment, Component } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom'
import Header from './header'

export default class componentName extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <List component="nav">
                    <ListItem button component={Link} to="/items">
                        <ListItemText primary="Items" secondary="Items details (potion, phoenix down, etc)" />
                    </ListItem>
                    <ListItem button component={Link} to="/bazaar">
                        <ListItemText primary="Bazaar" secondary="Bazaar recipes and details" />
                    </ListItem>
                    <ListItem button component={Link} to="/hunts">
                        <ListItemText primary="Hunts" secondary="Hunts instructions, rewards and tips" />
                    </ListItem>
                    <ListItem button component={Link} to="/bestiary">
                        <ListItemText primary="Bestiary" secondary="Details about monsters" />
                    </ListItem>
                </List>
            </Fragment>
        )
    }
}

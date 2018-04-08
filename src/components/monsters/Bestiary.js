import React, { Component, Fragment } from 'react'
import { Avatar, List, ListItem, ListItemText } from 'material-ui'
import { Link } from 'react-router-dom'

import Header from '../header';
import BestiaryData from '../../database/bestiary.json'

export default class Bestiary extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Bestiary" backButton />
                <List component="nav">
                    {BestiaryData.map((item, id) => (
                        <ListItem button component={Link} to={`bestiary/${id}`} key={item.id || item.name}>
                            <Avatar>{item.name[0]}</Avatar>
                            <ListItemText primary={item.name} secondary={item.species} />
                        </ListItem>
                    ))}
                </List>
            </Fragment>
        )
    }
}

import React, { Component, Fragment } from 'react'
import Header from '../header'
import { List, ListItem, ListItemText, Avatar } from 'material-ui'
import { Link, Route } from 'react-router-dom'
import BazaarItem from './BazaarItem'
import bazaarData from '../../database/bazaar.json';



export default class BazaarList extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Bazaar" backButton />

                <List component="nav">
                    {bazaarData.map((item, id) => (
                        <ListItem button component={Link} to={`bazaar/${id}`} key={item.id || item.name}>
                            <Avatar>{item.name[0]}</Avatar>
                            <ListItemText primary={item.name} secondary={<Fragment><strong>Price:</strong> {item.price}</Fragment>} />
                        </ListItem>
                    ))}
                </List>

                <Route path="/bazaar/:id" children={(({ match }) =>
                    <BazaarItem id={match && Number(match.params.id)} onClose={() => window.history.back()} />
                )} />
            </Fragment>
        )
    }
}

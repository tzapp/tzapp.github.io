import React, { Component } from 'react'
import Markdown from 'react-markdown'
import bazaarData from '../../database/bazaar.json';
import Share from '../share'
import { AppBar, Toolbar, Drawer, Typography, IconButton, List, ListItem, ListItemText, ListSubheader, CardContent, Avatar } from 'material-ui'
import {
    ArrowBack as ArrowBackIcon,
    Share as ShareIcon
} from 'material-ui-icons'

const animationTime = 195;

export default class BazaarItem extends Component {

    constructor(props) {
        super(props);


        this.state = {
            id: props.id
        }
    }

    componentWillReceiveProps({ id, onClose }) {
        this.setState({ onClose, id: id !== null ? id : this.state.id });
        if (id !== null) {
            this.animationTimeout && clearTimeout(this.animationTimeout);
            this.animationTimeout = setTimeout(() => this.setState({ id }), animationTime)
        }
    }

    renderSubList(items) {
        return items.map(item => (
            <ListItem button key={item.name}>
                <Avatar>{item.amt}</Avatar>
                <ListItemText primary={item.name} />
            </ListItem>
        ))
    }

    render() {
        const item = bazaarData[this.state.id];
        return (
            <Drawer
                anchor="right"
                transitionDuration={animationTime}
                open={this.props.id !== null}
                onClose={this.props.onClose}
            >
                {item &&
                    <article style={{ width: 500, maxWidth: '100vw' }}>
                        <AppBar position="static" color="default">
                            <Toolbar>
                                <IconButton color="inherit" aria-label="Back" onClick={this.props.onClose} style={{ marginLeft: -12, marginRight: 20 }}>
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                                    {item.name}
                                </Typography>
                                <Share shareData={{
                                    title: `Bazaar - ${item.name}`,
                                    text: `Bazaar - ${item.name} - TZAPP`,
                                    url: window.location.href,
                                }}>
                                    <IconButton color="inherit" aria-label="Share">
                                        <ShareIcon />
                                    </IconButton>
                                </Share>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <Typography component="div" gutterBottom>
                                <Markdown source={item.description} />
                            </Typography>

                            <Typography>
                                <b>Price:</b> {item.price}
                            </Typography>
                            <Typography gutterBottom>
                                <b>{item.repeatable ? 'Repeatable' : 'Non-Repeatable'}</b>
                            </Typography>
                        </CardContent>
                        <List subheader={<ListSubheader color="primary">Need</ListSubheader>}>
                            {this.renderSubList(item.need)}
                        </List>
                        <List subheader={<ListSubheader color="primary">Get</ListSubheader>}>
                            {this.renderSubList(item.get)}
                        </List>
                    </article>
                }
            </Drawer>
        )
    }
}
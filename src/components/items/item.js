import React, { Component } from 'react'
import Markdown from 'react-markdown'
import itemsData from '../../database/items.json';
import Share from '../share'
import { CardContent } from 'material-ui/Card';
import { AppBar, Toolbar, Drawer, Typography, IconButton } from 'material-ui'
import {
    ArrowBack as ArrowBackIcon,
    Share as ShareIcon
} from 'material-ui-icons'

const animationTime = 195;

export default class Item extends Component {

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
    render() {
        const item = itemsData[this.state.id];
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
                                    title: `${item.name} - The Zodiac APP`,
                                    text: `${item.name} - The Zodiac APP`,
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
                                <Markdown source={item.effect} />
                            </Typography>

                            {item.range &&
                                <Typography>
                                    <b>Range:</b> {item.range}
                                </Typography>
                            }
                            <Typography>
                                <b>Buy:</b> {item.buy || '-'}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Sell:</b> {item.sell}
                            </Typography>

                            {item.note &&
                                <Typography variant="caption">
                                    <b>Note:</b> {item.note}
                                </Typography>
                            }
                        </CardContent>
                    </article>
                }
            </Drawer>
        )
    }
}
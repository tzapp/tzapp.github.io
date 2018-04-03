import React, { Component } from 'react'
import Markdown from 'react-markdown'
import itemsData from '../../database/items.json';
import { CardContent } from 'material-ui/Card';
import { AppBar, Toolbar, Drawer, Typography, IconButton } from 'material-ui'
import { ArrowBack as ArrowBackIcon } from 'material-ui-icons'

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
                                <Typography variant="title" color="inherit">
                                    {item.name}
                                </Typography>
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
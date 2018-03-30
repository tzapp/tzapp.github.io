import React, { Component } from 'react'
import Markdown from 'react-markdown'
import itemsData from '../database/items.json';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';



export default class Item extends Component {
    render() {
        const { name, buy, sell, effect } = itemsData[this.props.id]
        return (
            <article>
                <Card style={{ margin: 10 }}>
                    <CardContent>
                        <header>
                            <Typography color="textSecondary">Item</Typography>
                            <Typography variant="headline" component="h2">
                                {name}
                            </Typography>
                        </header>

                        <Typography component="div">
                            <Markdown source={effect} />
                        </Typography>

                        <Typography>
                            <b>Buy:</b> {buy || '-'}
                        </Typography>
                        <Typography>
                            <b>Sell:</b> {sell}
                        </Typography>
                    </CardContent>
                </Card>
            </article>
        )
    }
}

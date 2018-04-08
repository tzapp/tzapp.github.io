import React, { Fragment } from 'react'
import { Typography, Divider, Card, CardContent } from 'material-ui'

const MonsterItems = ({ items }) => {
    return (
        <Card>
            {items.steal && <Fragment>
                <CardContent>
                    <Typography variant="headline" component="h2" gutterBottom>Steal</Typography>
                    <Typography variant="subheading" color="textSecondary" gutterBottom>Normal Rates:</Typography>
                    {items.steal[0].split("\n").map((v, i) => <Typography key={i}>{v}</Typography>)}
                    <br />
                    <Typography variant="subheading" color="textSecondary" gutterBottom>Using Thief's Cuff:</Typography>
                    {items.steal[1].split("\n").map((v, i) => <Typography key={i}>{v}</Typography>)}
                </CardContent>
                <Divider />
            </Fragment>}

            {(items.dropChain || items.drop) && <Fragment>
                <CardContent>
                    <Typography variant="headline" component="h2" gutterBottom>Drop</Typography>
                    {items.drop ? <Typography>{items.drop}</Typography> : items.dropChain.map((el, chain) => el &&
                        <Fragment key={chain}>
                            <Typography variant="subheading" color="textSecondary" gutterBottom>Chain {chain}:</Typography>
                            {items.dropChain[chain].split("\n").map((v, i) => <Typography key={i}>{v}</Typography>)}
                        </Fragment>
                    )}
                </CardContent>
                <Divider />
            </Fragment>}

            {items.poach &&
                <CardContent>
                    <Typography variant="headline" component="h2" gutterBottom>Poach</Typography>
                    {items.poach.split("\n").map((v, i) => <Typography key={i}>{v}</Typography>)}
                </CardContent>
            }
        </Card>
    )
}

export default MonsterItems

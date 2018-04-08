import React from 'react'
import { Card, CardContent, Typography } from 'material-ui'

const componentName = ({ monster }) => {
    const { type, species, aggression, attacks, magicks, technicks, augments } = monster
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">Classification</Typography>
                <Typography component="p" gutterBottom>{species}</Typography>
                <Typography color="textSecondary" gutterBottom>{type} - {aggression}</Typography>

                <Typography>
                    <b>Attacks:</b> {attacks.replace("\n", '. ')}
                </Typography>
                <Typography>
                    <b>Magicks:</b> {magicks}
                </Typography>
                <Typography>
                    <b>Technicks:</b> {technicks}
                </Typography>
                <Typography>
                    <b>Augments:</b> {augments}
                </Typography>

            </CardContent>
        </Card>
    )
}

export default componentName

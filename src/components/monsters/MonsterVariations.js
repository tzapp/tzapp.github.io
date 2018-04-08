import React from 'react'
import { Card, CardContent, Typography } from 'material-ui'

const MonsterVariations = ({ variations }) => {
    return variations.map(({ location, level, hp, mp, xp }, type) =>
        <Card key={type} style={{ marginBottom: 10 }}>
            <CardContent>
                <Typography variant="headline" component="h2" gutterBottom>Type [{type + 1}]</Typography>
                <Typography color="textSecondary" gutterBottom>Level {level}</Typography>
                <Typography><strong>HP: </strong>{hp}</Typography>
                <Typography><strong>MP: </strong>{mp}</Typography>
                <Typography gutterBottom><strong>XP: </strong>{xp}</Typography>

                <Typography component="address"><strong>Location: </strong>{location}</Typography>
            </CardContent>
        </Card>
    )
}

export default MonsterVariations

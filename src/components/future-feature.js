import React, { Fragment } from 'react'
import Header from './header'
import Typography from 'material-ui/Typography'

const FutureFeature = (props) => {
    return (
        <Fragment>
            <Header title={props.title} backButton />
            <br />
            <Typography variant="display1">
                This feature will be available soon.
            </Typography>
        </Fragment>
    )
}

export default FutureFeature

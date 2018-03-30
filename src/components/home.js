import React, { Component } from 'react'
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Button component={Link} to="/items" variant="raised">Items</Button>
                <Button variant="raised">Bazaar</Button>
            </div>
        )
    }
}

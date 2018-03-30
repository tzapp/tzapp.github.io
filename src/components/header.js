import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

    render() {
        return (
            <header style={{ paddingTop: 64 }}>
                <AppBar>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu} style={{ marginLeft: -12, marginRight: 20 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>The Zodiac APP</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.menuOpen}
                    onClose={this.toggleMenu}
                    onOpen={this.toggleMenu}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleMenu}
                        onKeyDown={this.toggleMenu}>
                        <List style={{ width: 250 }}>
                            <ListItem button component={Link} to="/">
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button component={Link} to="/items">
                                <ListItemText primary="Items" />
                            </ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </header>
        )
    }
}

export default Header;

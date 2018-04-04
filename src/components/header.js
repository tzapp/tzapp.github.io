import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import { Link } from 'react-router-dom'
import Divider from 'material-ui/Divider';
import Share from './share'
import {
    Menu as MenuIcon,
    ArrowBack as ArrowBackIcon,
    Share as ShareIcon,
    Code as CodeIcon
} from 'material-ui-icons'


const styles = {
    root: {
        paddingTop: 64
    },
    flex: {
        flex: 1,
    },
    menuButtonWrapper: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen })

    goBack = () => window.history.back()

    render() {

        const { classes, children, title = 'The Zodiac APP (v0.2.0)', backButton = false, rightAction } = this.props

        const Icon = backButton ? ArrowBackIcon : MenuIcon;
        return (
            <header className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <div className={classes.menuButtonWrapper}>
                            <IconButton color="inherit" aria-label="Menu" onClick={backButton ? this.goBack : this.toggleMenu}>
                                <Icon />
                            </IconButton>
                        </div>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {children || title}
                        </Typography>
                        {rightAction && <div>{rightAction}</div>}
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.menuOpen}
                    onClose={this.toggleMenu}
                    onOpen={this.toggleMenu}
                >
                    <div
                        style={{ width: 250 }}
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleMenu}
                        onKeyDown={this.toggleMenu}>
                        <List>
                            <ListItem button component={Link} to="/">
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button component={Link} to="/items">
                                <ListItemText primary="Items" />
                            </ListItem>
                            <ListItem button component={Link} to="/bazaar">
                                <ListItemText primary="Bazaar" />
                            </ListItem>
                            <ListItem button component={Link} to="/hunts">
                                <ListItemText primary="Hunts" />
                            </ListItem>
                            <ListItem button component={Link} to="/bestiary">
                                <ListItemText primary="Bestiary" />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem
                                button
                                component={Share}
                                shareData={{
                                    title: 'The Zodiac APP',
                                    text: 'Final Fantasy XII TZA PWA',
                                    url: window.location.origin,
                                }}>
                                <ListItemIcon>
                                    <ShareIcon />
                                </ListItemIcon>
                                <ListItemText primary="Share" />
                            </ListItem>

                            <ListItem button component="a" href="https://github.com/tzapp/tzapp.github.io" target="_blank">
                                <ListItemIcon>
                                    <CodeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Help on GitHub" />
                            </ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </header>
        )
    }

}

export default withStyles(styles)(Header);

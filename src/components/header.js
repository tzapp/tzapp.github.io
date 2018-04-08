import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Share from './share'
import { Divider, Drawer, IconButton, Typography, Toolbar, AppBar, List, ListItem, ListItemText, ListItemIcon, withStyles } from 'material-ui'
import {
    Menu as MenuIcon,
    ArrowBack as ArrowBackIcon,
    Share as ShareIcon,
    Code as CodeIcon,
    Info as InfoIcon,
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
        const { children, classes, title = 'The Zodiac APP', backButton = false, rightAction, AppBarProps, ...props } = this.props

        const Icon = backButton ? ArrowBackIcon : MenuIcon;
        return (
            <header className={classes.root} {...props} >
                <AppBar {...AppBarProps}>
                    <Toolbar>
                        <div className={classes.menuButtonWrapper}>
                            <IconButton color="inherit" aria-label="Menu" onClick={backButton ? this.goBack : this.toggleMenu}>
                                <Icon />
                            </IconButton>
                        </div>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        {rightAction && <div>{rightAction}</div>}
                    </Toolbar>
                    {children}
                </AppBar>
                <Drawer
                    open={this.state.menuOpen}
                    onClose={this.toggleMenu}
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
                            <ListItem button component={Link} to="/bestiary">
                                <ListItemText primary="Bestiary" />
                            </ListItem>
                            <ListItem button component={Link} to="/hunts">
                                <ListItemText primary="Hunts" />
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
                            <ListItem button component={Link} to="/about">
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </header>
        )
    }

}

export default withStyles(styles)(Header);

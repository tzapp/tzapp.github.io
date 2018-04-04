import React, { Fragment, Component } from 'react';
import { AppBar, Toolbar, Tooltip, TextField, Drawer, Button, IconButton, List, ListItem, ListItemText, withStyles, Typography, CardContent } from 'material-ui'
import { FilterList as FilterIcon, Close as CloseIcon, Remove as RemoveIcon, ArrowBack as ArrowBackIcon } from 'material-ui-icons';
import itemsData from '../../database/items.json';
import { Link } from 'react-router-dom'
import { MenuItem } from 'material-ui/Menu';
import Item from './item'
import { Route } from 'react-router-dom'
import Header from '../header'

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        // zIndex: 10000
    },
    fabSmall: {
        position: 'fixed',
        bottom: theme.spacing.unit * 4 + 56,
        right: theme.spacing.unit * 2 + 8,
        // zIndex: 10000
    }
});

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: '',
            openFilter: false,
        }
    }


    render() {
        const { classes } = this.props;
        const { openFilter, order } = this.state;
        const itemsData = this.getItems();
        return (
            <Fragment>
                <Header title="Items" backButton />
                <List component="nav">
                    {itemsData.map(item => (
                        <ListItem button component={Link} to={`items/${item.id}`} key={item.name}>
                            <ListItemText primary={item.name} secondary={<span><b>B:</b>{item.buy || '-'} / <b>S:</b>{item.sell}</span>} />
                        </ListItem>
                    ))}
                </List>
                <Tooltip placement="left" title="Edit Filters">
                    <Button variant="fab" color="primary" aria-label="add" className={classes.fab} onClick={this.toggleFilter}>
                        {openFilter ? <CloseIcon /> : <FilterIcon />}
                    </Button>
                </Tooltip>
                {order &&
                    <Tooltip placement="left" title="Clear Filters">
                        <Button variant="fab" mini color="secondary" aria-label="add" className={classes.fabSmall} onClick={this.clearFilter}>
                            <RemoveIcon />
                        </Button>
                    </Tooltip>
                }
                <Drawer
                    // variant="persistent"
                    anchor="right"
                    open={openFilter}
                    onClose={this.toggleFilter}
                >
                    <form style={{ width: 400, maxWidth: '100vw' }}>
                        <AppBar position="static" color="default">
                            <Toolbar>
                                <IconButton color="inherit" aria-label="Close" onClick={this.toggleFilter} style={{ marginLeft: -12, marginRight: 20 }}>
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit">
                                    Filter
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <CardContent>
                            <TextField
                                select
                                label="Order"
                                fullWidth
                                value={this.state.order}
                                onChange={e => this.setState({ order: e.target.value }) || this.toggleFilter()}
                            >
                                <MenuItem value="">Default</MenuItem>
                                <MenuItem value="name">Name (A-Z)</MenuItem>
                                <MenuItem value="name|dsc">Name (Z-A)</MenuItem>
                                <MenuItem value="buy">Lowest Buy Price</MenuItem>
                                <MenuItem value="buy|dsc">Highest Buy Price</MenuItem>
                                <MenuItem value="sell">Lowest Sell Price</MenuItem>
                                <MenuItem value="sell|dsc">Highest Sell Price</MenuItem>
                            </TextField>
                        </CardContent>
                    </form>
                </Drawer>
                <Route path="/items/:id" children={(({ match }) =>
                    <Item id={match && Number(match.params.id)} onClose={() => window.history.back()} />
                )} />

            </Fragment>
        )
    }

    toggleFilter = () => this.setState({ openFilter: !this.state.openFilter })

    clearFilter = () => this.setState({ order: '' })

    static nameSort({ name: a }, { name: b }) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
    static buySort = ({ buy: a }, { buy: b }) => (a || 0) - (b || 0);
    static sellSort = ({ buy: a }, { buy: b }) => (a || 0) - (b || 0);

    getItems() {
        const order = this.state.order.split('|');
        const items = itemsData.map((item, id) => ({ ...item, id }));
        switch (order[0]) {
            case 'name':
                items.sort(ItemList.nameSort);
                break;
            case 'buy':
                items.sort(ItemList.buySort);
                break;
            case 'sell':
                items.sort(ItemList.sellSort);
                break;
            default: break;
        }
        if (order[1] === 'dsc')
            items.reverse()
        return items

    }

}

export default withStyles(styles, { withTheme: true })(ItemList);   
import React, { Fragment, Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { FilterList as FilterIcon, Close as CloseIcon, Remove as RemoveIcon } from 'material-ui-icons';
import Button from 'material-ui/Button';
import itemsData from '../../database/items.json';
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Tooltip from 'material-ui/Tooltip';
import Item from './item'
import { Route } from 'react-router-dom'
import Header from '../header'

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        zIndex: 10000
    },
    fabSmall: {
        position: 'fixed',
        bottom: theme.spacing.unit * 4 + 56,
        right: theme.spacing.unit * 2 + 8,
        zIndex: 10000
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
                    {itemsData.map((item, id) => (
                        <ListItem button component={Link} to={`items/${id}`} key={item.name}>
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
                    <form style={{ width: 250, padding: 20 }}>
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
                    </form>
                </Drawer>
                <Route path="/items/:id" children={(({ match }) =>
                    <Drawer
                        anchor="right"
                        open={Boolean(match)}
                        onClose={() => window.history.back()}
                    >
                        {match && <Item id={Number(match.params.id)} />}
                    </Drawer>
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
        const items = [...itemsData];
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
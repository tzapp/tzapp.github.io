import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import themeColor from 'material-ui/colors/deepPurple';
import 'typeface-roboto';
import { HashRouter, Route, Switch } from 'react-router-dom'
import FutureFeature from './components/future-feature'

import { Home, ItemList } from './components'

const theme = createMuiTheme({
    palette: {
        primary: themeColor
    },
});

class App extends Component {
    render() {
        return (
            <HashRouter>
                <MuiThemeProvider theme={theme}>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/items" component={ItemList} />

                            <Route path="/bazaar" render={() => <FutureFeature title="Bazaar" />} />
                            <Route path="/hunts" render={() => <FutureFeature title="Hunts" />} />
                            <Route path="/bestiary" render={() => <FutureFeature title="Bestiary" />} />
                        </Switch>
                    </main>
                </MuiThemeProvider>
            </HashRouter>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import themeColor from 'material-ui/colors/deepPurple';
import './App.css';
import 'typeface-roboto';
import { HashRouter, Route, Switch } from 'react-router-dom'

import { Header, Home, ItemList } from './components'

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
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/items" component={ItemList} />
                        </Switch>
                    </main>
                </MuiThemeProvider>
            </HashRouter>
        );
    }
}

export default App;

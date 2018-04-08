import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import themeColor from 'material-ui/colors/deepPurple';
import 'typeface-roboto';
import { HashRouter, Route, Switch } from 'react-router-dom'
import FutureFeature from './components/future-feature'
import { Home, ItemList, About } from './components'
import { Button, Snackbar } from 'material-ui'
import { BazaarList } from './components/bazaar'

import { Bestiary, Monster } from './components/monsters'

const theme = createMuiTheme({
    palette: {
        primary: themeColor
    },
});
const bestiaryRendered = <Bestiary />
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInstalledMessage: false,
            showUpdateMessage: false,
            showUpdateOnRestartMessage: false,
        }
    }

    componentDidMount() {
        if (this.props.appServiceWorker) {
            this.props.appServiceWorker.onInstalled(() => this.setState({ showInstalledMessage: true }))
            this.props.appServiceWorker.onUpdateFound(() => this.setState({ showUpdateMessage: true }))
        }
    }

    render() {
        return (
            <HashRouter>
                <MuiThemeProvider theme={theme}>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/items" component={ItemList} />
                            <Route path="/bazaar" component={BazaarList} />
                            <Route path="/about" component={About} />
                            <Route exact path="/bestiary" render={() => bestiaryRendered} />
                            <Route path="/bestiary/:id" render={(({ match }) =>
                                <Monster id={Number(match.params.id)} />
                            )} />

                            <Route path="/hunts" render={() => <FutureFeature title="Hunts" />} />
                        </Switch>
                        <Snackbar
                            open={this.state.showInstalledMessage}
                            autoHideDuration={6000}
                            onClose={() => this.setState({ showInstalledMessage: false })}
                            message="The App is ready to work offline."
                        />
                        <Snackbar
                            open={this.state.showUpdateMessage}
                            onClose={() => this.setState({ showUpdateMessage: false, showUpdateOnRestartMessage: true })}
                            message="An new version is available."
                            action={[
                                <Button key="undo" color="secondary" size="small" onClick={() => window.location.reload()}>UPDATE</Button>
                            ]}
                        />
                        <Snackbar
                            open={this.state.showUpdateOnRestartMessage}
                            autoHideDuration={6000}
                            onClose={() => this.setState({ showUpdateOnRestartMessage: false })}
                            message="The App will be updated on next restart."
                        />
                    </main>
                </MuiThemeProvider>
            </HashRouter >
        );
    }
}

export default App;

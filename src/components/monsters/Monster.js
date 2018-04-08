import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui'
import SwipeableViews from 'react-swipeable-views';

import Header from '../header'
import BestiaryData from '../../database/bestiary.json'
import MonsterItems from './MonsterItems'
import MonsterVariations from './MonsterVariations'
import MonsterInfo from './MonsterInfo'
import ShareButton from '../ShareIconButton'

export default class Monster extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tab: 0
        }
    }

    changeTab = tab => this.setState({ tab })

    render() {
        const { name, variations, items, ...monster } = BestiaryData[this.props.id]
        return (
            <article>
                <Header title={name} style={{ paddingTop: 64 + 48 }} backButton rightAction={
                    <ShareButton color="inherit" shareData={{
                        title: `${name} - Bestiary - TZAPP`,
                        text: `${name} - Bestiary - TZAPP`,
                        url: window.location.href,
                    }} />
                }>
                    <Tabs
                        value={this.state.tab}
                        onChange={(e, tab) => this.changeTab(tab)}
                        fullWidth
                    >
                        <Tab label="Classification" />
                        <Tab label="Items" />
                        <Tab label="Variations" />
                    </Tabs>
                </Header>
                <SwipeableViews
                    index={this.state.tab}
                    onChangeIndex={this.changeTab}
                >
                    <div style={{ padding: 10 }}>
                        <MonsterInfo monster={monster} />
                    </div>
                    <div style={{ padding: 10 }}>
                        <MonsterItems items={items} />
                    </div>
                    <div style={{ padding: 10 }}>
                        <MonsterVariations variations={variations} />
                    </div>
                </SwipeableViews>




            </article>
        )
    }
}

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import history from './history'
import { store } from './store/store'
import './App.scss'

import Layout from './layouts/main'
import Home from './pages/home'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Layout>
                    <Route path="/" component={Home} />
                </Layout>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'),
)

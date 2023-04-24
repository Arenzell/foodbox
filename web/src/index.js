import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import AppRoutes from './routes/AppRoutes'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

const history = createHistory()
const routerMid = routerMiddleware(history)

const store = createStore(combineReducers({ ...reducers, router: routerReducer }),
    composeWithDevTools(
        applyMiddleware(thunk, routerMid, logger),
    ))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRoutes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()

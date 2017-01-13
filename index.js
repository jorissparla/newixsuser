import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
var Promise = require('es6-promise').Promise;
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './src/App'

injectTapEventPlugin()
const createStoreWithMiddleware = applyMiddleware( promise, reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('rootGoLives')
)

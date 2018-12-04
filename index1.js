import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, gql, graphql, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './src/App';

console.log('env', env);

injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(`connected to ${env.SERVER}`);
const networkInterface = createNetworkInterface({
  uri: `http://${env.SERVER}:55555/graphql`
});
const client = new ApolloClient({
  networkInterface
});

console.log(window.config);

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('rootNewIXSUser')
);

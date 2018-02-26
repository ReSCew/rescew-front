import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import './index.css';
import App from './modules/app/containers/AppContainer';
import registerServiceWorker from './registerServiceWorker'; // TODO figure out
import configureStore from './store/configureStore';
import history from './store/reduxRouterHistory';

// Initialize the app

// initialize store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

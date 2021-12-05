import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';
import { createStore, compose , applyMiddleware} from 'redux';
import './index.css';

const composeEnhancers =
    typeof window === 'object' && process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(),
);


const store = createStore(reducer, enhancer);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

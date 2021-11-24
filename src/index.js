import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import configureStore from "./store/store";
import {getTasks} from "./store/action/taskAction";

const store = configureStore()
store.dispatch(getTasks())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

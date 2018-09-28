import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById("root")
);

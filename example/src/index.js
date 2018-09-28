import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { store } from './store';
import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  <HelloWorld />,
  document.getElementById("root")
);

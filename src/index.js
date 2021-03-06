import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/Menu.css';
import './assets/styles/global.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './assets/components/Styles.js';

ReactDOM.render(
  <MuiThemeProvider theme={ MyTheme } disableStylesGeneration={false}>
    <App />
  </MuiThemeProvider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

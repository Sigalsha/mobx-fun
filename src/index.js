import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './js/store/IcecreamStore';
console.log(store)

window.store = store;
ReactDOM.render(<App store={store} />, document.getElementById('root'));



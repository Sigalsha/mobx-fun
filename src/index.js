import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './js/store/IcecreamStore';
import { Provider } from 'mobx-react';

console.log(store)

window.store = store;

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

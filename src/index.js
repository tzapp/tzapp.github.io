import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppServiceWorker from './registerServiceWorker';
import './index.css';

const appSW = new AppServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
appSW.register();

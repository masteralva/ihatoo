import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './route_demo/route2/Route';
import Router from './router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router/>, document.getElementById('root'));
registerServiceWorker();

import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore';
// import routes from './routes';

import App from './scenes/App';
import Kanban from './scenes/Kanban';


const store = configureStore();

window.store = store;

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={browserHistory} routes={routes} />
//     </Provider>, document.getElementById('root')
// );

ReactDOM.render(
    <Provider store={store}>
        <App><Kanban></Kanban></App>
    </Provider>, 
    document.getElementById('root')
);
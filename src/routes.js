import React from 'react'; 
// import { Route, IndexRoute } from 'react-router';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import App from './scenes/App';
// import HomePage from './scenes/HomePage';
import Kanban from './scenes/Kanban';

export default (
  <BrowserRouter path="/" component={App}> 
    {/* <IndexRoute component={HomePage} /> */}
    <IndexRoute component={Kanban} />
  </BrowserRouter>
);
import React from 'react';
import { Route } from 'react-router-dom'

import Header from '../../components/Header';
import Dashboard from '../Dashboard';
import Kanban from '../Kanban';

import './style.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <main className="app">
        <Header></Header>
        <div className="container">
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/kanban" component={Kanban} />
        <Route path="/projects" component={Dashboard} />
        <Route path="/team" component={Dashboard} />
        </div>
        
      </main>);
  }
}
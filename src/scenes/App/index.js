import React from 'react';
import Category from '../../components/Category';
import Card from '../../components/Card';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <Category>
          <Card/>
          <Card/>
          <Card/>
        </Category>
      </div>);
  }
}
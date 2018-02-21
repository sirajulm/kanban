import React from 'react';
import Header from '../../components/Header';
import Category from '../../components/Category';
import Card from '../../components/Card';
import AddButton from '../../components/AddButton';
import DateGroup from '../../components/DateGroup';
import BackToTop from '../../components/BackToTop';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onAddCategory = (event)=> {
    console.log("add category");
  }
  render() {
    return (
      <div>
        <Header></Header>
      <div style={{textAlign: 'center'}}>
          <Category>
            <DateGroup>
              <Card/>
              <Card/>
            </DateGroup>
            <DateGroup>
              <Card/>
              <Card/>
            </DateGroup>
            <BackToTop/>
          </Category>
          <Category>
            <DateGroup>
              <Card/>
              <Card/>
            </DateGroup>
            <DateGroup>
              <Card/>
              <Card/>
            </DateGroup>
            <BackToTop/>
          </Category>
          <Category>
            <DateGroup>
              <Card/>
              <Card/>
            </DateGroup>
            <DateGroup>
              <Card/>
              <Card/>
            </DateGroup>
            <BackToTop/>
          </Category>
          <AddButton onAction={this.onAddCategory}/>
        </div>
      </div>);
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories } from '../../actions/categoryActions';

import Category from '../../components/Category';
import AddButton from '../../components/AddButton';
import BackToTop from '../../components/BackToTop';

class Kanban extends React.Component {
  constructor(props) {
    super(props);
  }
  onAddCategory = (event)=> {
    console.log("add category");
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
  }
  render() {  
    return (<div style={{width: '2000%'}}>
    {
      this.props.categories.map((category)=> {
        return (<Category 
          id={category.id} 
          key={category.id} 
          title={category.title}
          filter={category.filter}
          >
          <BackToTop/>
        </Category>);
      })
    }
    <AddButton onAction={this.onAddCategory}/>
  </div>);
  }
}

Kanban.propTypes = {

}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(
  mapStateToProps)(Kanban);
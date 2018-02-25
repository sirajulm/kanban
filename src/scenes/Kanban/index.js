import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, addCategory } from '../../actions/categoryActions';

import Category from '../../components/Category';
import AddButton from '../../components/AddButton';
import BackToTop from '../../components/BackToTop';

import './style.scss';

class Kanban extends React.Component {
  constructor(props) {
    super(props);
  }
  onAddCategory = (event)=> {
    this.props.dispatch(addCategory({category: {
      "id": "d",
      "title": "New Category",
      "filter": "SHOW_ALL"
    }}));
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
  }
  render() {  
    const boardWidth = ((450 * this.props.categories.length) + 50);
    return (<section className="kanban-board">
        <header className="page-header">
          <span className="page-header-block">
            <span className="calendar">
              <img className="calendar-image" src="/src/public/img/calendar.png"/>
            </span>
            <span className="page-title">My Tasks</span>
          </span>
          <span className="category-view">
            <img className="category-view-image" src="/src/public/img/category-view.png"/>
          </span>
        </header>
        <div className="page-content">
          <div className="content-scroll">
            <div className="category-list" style={{width: boardWidth}}>
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
              <AddButton style={{ top: 50, right: -50}} onAction={this.onAddCategory}/>
            </div>
          </div>
        </div>
    </section>);
  }
}

Kanban.propTypes = {

}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(
  mapStateToProps)(Kanban);
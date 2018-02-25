import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, addCategory } from '../../actions/categoryActions';
import {showCategoryModal} from  '../../actions/modalActions';

import Category, {AddCategoryForm} from '../../components/Category';
import AddButton from '../../components/AddButton';
import {AddCardForm} from '../../components/Card';

import './style.scss';

class Kanban extends React.Component {
  constructor(props) {
    super(props);
  }
  onAddCategory = (event)=> {
    this.props.dispatch(showCategoryModal());
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
  }
  render() { 
    const boardWidth = ((450 * this.props.categories.length) + 100);
    const {showCategoryModal, showCardModal, categoryId} = this.props.modals;
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
                    filter={category.filter}/>);
                })
              }
              <AddButton style={{ top: 50, right: 20}} onAction={this.onAddCategory}/>
            </div>
          </div>
        </div>
        <AddCategoryForm open={showCategoryModal}/>
        <AddCardForm open={showCardModal} categoryId={categoryId}/>
    </section>);
  }
}

Kanban.propTypes = {

}

const mapStateToProps = ({ categories, modals }) => ({
  categories,
  modals
});

export default connect(
  mapStateToProps)(Kanban);
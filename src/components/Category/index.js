import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddButton from '../AddButton';
import DragHandle from '../DragHandle';

const Category = (props) => {
    const onAddCard = (event)=> {
        console.log('clicked');
    }
    return (
        <div>
            <div className="category-title">CategoryName</div>
            <DragHandle/>
            <div className="more-button">...</div>
            {props.children}
            <AddButton onAction={onAddCard}/>
        </div>
    )
}

Category.propTypes = {

}

export default  Category;
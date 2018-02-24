import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { filterCards } from '../../actions/categoryActions';

const FilterItem = (props) => {
    const active = props.active ? 'active' : '';

    const onFilterAction = ((event) => {
        props.dispatch(filterCards({id: props.category, filter: props.filter}))
    });
    return (
        <div onClick={onFilterAction} className={`filter-item ${active}`}>
            {props.title}
        </div>
    )
}

FilterItem.propTypes = {

}

export default  FilterItem;
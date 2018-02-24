import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FilterList = (props) => {
    return (
        <div className="filter-list">
            {props.children}
        </div>
    )
}

FilterList.propTypes = {

}

export default  FilterList;
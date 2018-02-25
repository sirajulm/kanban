import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Priority = (props) => {
    const colorMap=[
        '#e64125', 
        '#e8662b', 
        '#899536', 
        '#f4c844', 
        '#d2fe59', 
        '#8cfc4d', 
        '#62c3fa', 
        '#458ef7'
    ];
    return (
        <div className="priority" style={{backgroundColor: colorMap[props.priority - 1]}}>
            <span>{props.priority}</span>
        </div>
    )
}

Priority.propTypes = {
    priority: PropTypes.number.isRequired
}

export default  Priority;
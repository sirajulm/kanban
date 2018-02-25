import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Priority = (props) => {
    const colorMap=[
        '#458ef7',
        '#62c3fa',
        '#8cfc4d', 
        '#d2fe59', 
        '#f4c844', 
        '#899536', 
        '#e8662b', 
        '#e64125'
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
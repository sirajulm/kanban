import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Priority = (props) => {
    const colorMap=['red', 'green', 'blue'];
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
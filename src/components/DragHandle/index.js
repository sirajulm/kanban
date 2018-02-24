import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DragHandle = (props) => {
    return (
        <div className="drag-handle">
            <img src="/src/public/img/drag.png"/>
        </div>
    )
}

DragHandle.propTypes = {

}

export default  DragHandle;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Progress = (props) => {
    return (
        <div className="progress">
            <div className="track"></div>
            <div className="rail"></div>
        </div>
    )
}

Progress.propTypes = {

}

export default  Progress;
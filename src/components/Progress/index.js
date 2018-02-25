import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Progress = ({progress}) => {
    const railWidth = (progress < 100) ? (progress || 0) : 0;
    return (
        <div className="progress">
            <div className="track"></div>
            <div className="rail" style={{width: `${railWidth}%`}}></div>
        </div>
    )
}

Progress.propTypes = {

}

export default  Progress;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DateGroup = (props) => {
    return (
        <div>
            <div className="date">
            <svg height="18px" width="350px" viewBox="0 0 350 18">
                <line x1="0" y1="10" x2="132" y2="10" style={{stroke:'#b6b6b6',strokeWidth:1}}></line>
                <text x="135" y="15" stroke="none" fill="#b6b6b6" fontFamily="'Open Sans', sans-serif" fontSize="14">{props.date}</text>
                <line x1="218" y1="10" x2="350" y2="10" style={{stroke:'#b6b6b6',strokeWidth:1}}></line>
            </svg>
            </div>
            {props.children}
        </div>
    )
}

DateGroup.propTypes = {

}

export default  DateGroup;
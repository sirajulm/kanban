import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const SystemTime = (props) => {
    const hour = moment().format('hh');
    const minute = moment().format('mm');
    const meridian = moment().format('A');
    return (
        <span className="system-time">
            <span className="hour">{hour}</span>
            <span className="time-separator">:</span>
            <span className="minute">{minute}</span>
            <span className="meridian">{meridian}</span>
        </span>
    )
}

SystemTime.propTypes = {

}

export default  SystemTime;
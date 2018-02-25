import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SystemTime from './SystemTime';
import WorkHour from './WorkHour';
import './style.scss';

const WorkDay = (props) => {
    return (
        <span className="work-day">
            <SystemTime/>
            <WorkHour/>
        </span>
    )
}

WorkDay.propTypes = {

}

export default  WorkDay;
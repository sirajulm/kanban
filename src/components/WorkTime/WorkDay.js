import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SystemTime from './SystemTime';
import WorkHour from './WorkHour';

const WorkDay = (props) => {
    return (
        <div>
            <SystemTime/>
            <WorkHour/>
        </div>
    )
}

WorkDay.propTypes = {

}

export default  WorkDay;
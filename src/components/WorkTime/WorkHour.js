import React, {Component} from 'react';
import PropTypes from 'prop-types';

const WorkHour = (props) => {
    return (
        <span className="work-hour">
            <span className="work-hour-gauge">
                <img className="gauge-image" src="/src/public/img/gauge.png"/>
            </span>
            <span className="work-hour-status">WORKING</span>
        </span>
    )
}

WorkHour.propTypes = {

}

export default  WorkHour;
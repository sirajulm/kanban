import React, {Component} from 'react';
import PropTypes from 'prop-types';

const WorkHour = (props) => {
    return (
        <div>
            <div className="work-hour-gauge">GAUGE</div>
            <div className="work-hour-status">WORKING</div>
        </div>
    )
}

WorkHour.propTypes = {

}

export default  WorkHour;
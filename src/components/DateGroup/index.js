import React, {Component} from 'react';
import PropTypes from 'prop-types';

const DateGroup = (props) => {
    return (
        <div>
            <div className="date">Date</div>
            {props.children}
        </div>
    )
}

DateGroup.propTypes = {

}

export default  DateGroup;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.scss';

const DateGroup = ({date, children}) => {
    const formatDate = (dateString)=> {
        var momentDate = moment(dateString);
        const dateDiff = moment().diff(momentDate, 'days');
        if(dateDiff === 0) {
            // Today
            return null;
        } else if(dateDiff === 1) {
            return 'Yesterday';
        } else {
            return momentDate.format('D MMM YYYY');
        }
    }
    const formattedDate = formatDate(date);
    const style = formattedDate === null ? {minHeight: 350} : {};
    return (
        <div style={style}>
            {
                (children.length > 0) && formattedDate &&   <div className="date">
                    <svg height="18px" width="350px" viewBox="0 0 350 18">
                        <line x1="0" y1="10" x2="132" y2="10" style={{stroke:'#b6b6b6',strokeWidth:1}}></line>
                        <text x="135" y="15" stroke="none" fill="#b6b6b6" fontFamily="'Titillium Web', sans-serif" fontSize="14">{formattedDate}</text>
                        <line x1="218" y1="10" x2="350" y2="10" style={{stroke:'#b6b6b6',strokeWidth:1}}></line>
                    </svg>
                </div>
            }
            {children}
        </div>
    )
}

DateGroup.propTypes = {

}

export default  DateGroup;
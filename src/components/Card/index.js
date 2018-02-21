import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';
import Priority from '../Priority';
import Progress from '../Progress';
import Notification from '../Notification';

const Card = (props) => {
    return (
        <div>
            <Notification/>
            This is a card
            <Progress/>
            <Profile/>
            <Priority/>
            <div className="estimate"></div>
            <div className="team-name"></div>
            <div className="date"></div>
        </div>
    )
}

Card.propTypes = {

}

export default  Card;
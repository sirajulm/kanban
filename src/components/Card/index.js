import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';
import Priority from '../Priority';
import Progress from '../Progress';
import Beacon from '../Beacon';
import './style.scss';

const Card = (props) => {
    const backgroundStyle = {
        width: `${(props.progress || 0)}%`,
        backgroundColor: (props.isComplete) ? '#F2F3F9' : '#F0F8FA'
    }
    return (
        <div className="card">
            <div className="background" style={backgroundStyle}></div>
            <div className="card-content">
                <Beacon/>
                <div className="card-row">
                    <div className="card-title">
                        Create New designs in KAT for Boards, Cards, Details, Timelines and Graphs
                    </div>
                    <div className="estimate"></div>
                    <Progress/>
                </div>
                <div className="card-row details">
                    <div className="card-column team-name">
                        <span>{props.team}</span>
                    </div>
                    <div className="card-column meta-details">
                        <Profile/>
                        <Priority priority={1}/>
                        <span className="date">12 Jan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card;
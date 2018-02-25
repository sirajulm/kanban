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
        backgroundColor: (props.complete) ? '#F2F3F9' : '#F0F8FA'
    };

    const textStyle = {
        textDecoration: (props.complete) ? 'line-through' : 'none'
    }
    return (
        <div className="card">
            <div className="background" style={backgroundStyle}></div>
            <div className="card-content">
                <Beacon/>
                <div className="card-row">
                    <div className="card-title" style={textStyle}>
                        {props.description}
                    </div>
                    <div className="estimate">{props.estimate}</div>
                    <Progress progress={props.progress}/>
                </div>
                <div className="card-row details">
                    <div className="card-column team-name">
                        <span>{props.team.name}</span>
                    </div>
                    <div className="card-column meta-details">
                        <Profile width={24} height={24} user={props.assignee}/>
                        <Priority priority={props.priority}/>
                        <span className="date">{props.created_at}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import Profile from '../Profile';
import Priority from '../Priority';
import Progress from '../Progress';
import Beacon from '../Beacon';

import { completeCard } from '../../actions/cardActions';
import './style.scss';

const Card = (props) => {

    const onCompleteCard = (event)=> {
        const completedAt = moment().format('DD MMM YYYY HH:mm:ss');
        props.onCompleteCard(props.id, props.category_id, completedAt, true);
    }
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
                {props.alert && <Beacon /> }
                <div className="card-row">
                    <div className="card-title" title={props.description} style={textStyle}>
                        {props.description}
                    </div>
                    <div className="estimate" title={props.estimate}>{props.estimate}</div>
                    {!props.complete && <div className="complete-checkbox">
                        <input title="Mark card as complete." type="checkbox" checked={props.complete} onChange={onCompleteCard}/>
                    </div>}
                    <Progress progress={props.progress}/>
                </div>
                <div className="card-row details">
                    <div className="card-column team-name">
                        <span title={props.team.name}>{props.team.name}</span>
                    </div>
                    <div className="card-column meta-details">
                        <Profile width={24} height={24} user={props.assignee}/>
                        <Priority priority={props.priority}/>
                        <span className="date">{moment(props.created_at).format('D MMM')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {

}

const mapDispatchToProps = dispatch => {
    return {
      onCompleteCard: (id, categoryId, completedAt, isComplete) => dispatch(completeCard({id, categoryId, isComplete, completedAt}))      
    };
  };
  

export default connect(
    null, mapDispatchToProps)(Card);
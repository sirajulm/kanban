import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Profile = ({width, height, user, displayName}) => {
    return (
        <span className="profile" style={{height: height}} >
            <img className="profile-avatar" title={user.name} alt={user.name} src={user.avatar} style={{width: width, height: height}}/>
            {
                displayName && <span className="profile-name">{user.name}</span>
            }
        </span>
    )
}

Profile.propTypes = {
    user: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
}

export default Profile;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Profile = (props) => {
    return (
        <div className="profile">
            <img src="https://pbs.twimg.com/profile_images/482422347157094400/YpdekjL8_400x400.jpeg"/>
        </div>
    )
}

Profile.propTypes = {

}

export default Profile;
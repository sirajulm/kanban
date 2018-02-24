import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AddButton = (props) => {
    return (
        <div className="add-button" onClick={props.onAction}>
            +
        </div>
    )
}

AddButton.propTypes = {

}

export default  AddButton;
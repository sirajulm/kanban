import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AddButton = (props) => {
    const style = {...props.style}
    return (
        <span className="add-button" style={style} onClick={props.onAction}>
            <span className="icon">+</span>
        </span>
    )
}

AddButton.propTypes = {

}

export default  AddButton;
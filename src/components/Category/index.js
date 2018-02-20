import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Category = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

Category.propTypes = {

}

export default  Category;
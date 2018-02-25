import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const BackToTop = ({onAction}) => {
    return (
            <div className="back-to-top" onClick={onAction}>
                <div className="arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 240.823 240.823" 
                    width="512px" height="512px">
                    <g>
                        <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179   l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261   C187.881,124.315,187.881,116.495,183.189,111.816z" fill="#5fb5ef"/>	
                    </g>
                </svg>                
                </div>
                <div>Back To Today</div>
            </div>
    )
}

BackToTop.propTypes = {

}

export default  BackToTop;
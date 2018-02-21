import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuList, {MenuItem} from '../Menu';
import CurrentTime from '../CurrentTime';

const Header = (props) => {
    return (
        <div>
            Team Name
            <MenuList>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </MenuList>
            <CurrentTime/>
        </div>
    )
}

Header.propTypes = {

}

export default  Header;
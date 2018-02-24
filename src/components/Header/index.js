import React from 'react';
// import { Link, IndexLink } from 'react-router';

const Header = (props) => {
    return (<div className="text-center">
        <nav className="navbar navbar-default">
          {/* <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="kanban" activeClassName="active">Kanban</Link> */}
        </nav>
    </div>);
};

export default Header;










// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import MenuList, {MenuItem} from '../Menu';
// import WorkDay from '../WorkTime';
// import SearchIcon from '../Search';
// import Notification from '../Notification';
// import './style.scss';

// const Header = (props) => {
//     return (
//         <div className="header">
//             Team Name
//             <MenuList>
//                 <MenuItem/>
//                 <MenuItem/>
//                 <MenuItem/>
//                 <MenuItem/>
//             </MenuList>
//             <WorkDay/>
//             <SearchIcon/>
//             <Notification/>
//         </div>
//     )
// }

// Header.propTypes = {

// }

// export default  Header;
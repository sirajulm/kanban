import React from 'react';
import { NavLink } from 'react-router-dom';

import Profile from '../Profile';
import WorkTime from '../WorkTime';

import './style.scss';

const Header = (props) => {
    return (<nav className="navbar navbar-default header">
        <div className="header-logo">
            <NavLink to="/" exact>KickassTeam</NavLink>
        </div>
        <div className="navbar-primary">
            <NavLink to="/dashboard" exact className="nav-item" activeClassName="active">Dashboard</NavLink>
            <NavLink to="/kanban" className="nav-item" activeClassName="active">My Tasks</NavLink>
            <NavLink to="/projects" className="nav-item" activeClassName="active">Projects</NavLink>
            <NavLink to="/team" className="nav-item" activeClassName="active">Team</NavLink>
        </div>
        <div className="navbar-secondary">
            <WorkTime/>
            <NavLink to="#search" exact className="nav-item search" activeClassName="active">
                <span>
                    <img src="/public/img/search.png" />
                </span>
            </NavLink>
            <NavLink to="#notifications" className="nav-item notification" activeClassName="active">
                <span><img src="/public/img/notification.png" /></span>
            </NavLink>
            <NavLink to="#video" className="nav-item video" activeClassName="active">
                <span><img src="/public/img/video.png" /></span>
            </NavLink>
            <NavLink to="#profile" className="nav-item avatar" activeClassName="active">
                <Profile 
                    width={30} 
                    height={30}
                    displayName={true}
                    user={{
                        "id": 123,
                        "name": "Sirajul Muneer C B",
                        "avatar": "https://pbs.twimg.com/profile_images/482422347157094400/YpdekjL8_400x400.jpeg"
                    }}/>
                </NavLink>
        </div>
    </nav>);
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
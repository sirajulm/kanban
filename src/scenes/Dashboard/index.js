import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {  
    return (<div className="dashboard">
    <div className="jumbo">
      <h1>Welcome to my Dashboard. Please visit the Kanban page.</h1>
    </div>
    
  </div>);
  }
}

Dashboard.propTypes = {

}

export default Dashboard;
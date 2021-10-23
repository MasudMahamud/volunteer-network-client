import React from 'react';

import SideBar from '../SideBar/SideBar';

const Dashboard = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>
        <div className="col-md-8">
          <h3 style={{ marginTop: '60px' }}> welcome to dashboard</h3>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
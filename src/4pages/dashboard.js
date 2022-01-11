import React from 'react';
import DashboardLayout from '../3layouts/dashboard.js';
import Navbar1 from '../2parts/navbar1.js';
import DashTable from '../2parts/table1.js';

const Dashboard = async () => {
    return (<DashboardLayout data1={<Navbar1/>} data2={<DashTable/>}/>);
};

export default Dashboard;

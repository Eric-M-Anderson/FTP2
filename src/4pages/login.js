import React from 'react';
import DashboardLayout from '../3layouts/dashboard.js';
import Form from '../3layouts/form.js';
import Login1 from '../2parts/login1.js';
import NavbarLogin from '../2parts/navbar-login.js';

const Login = () => {
    return <DashboardLayout data1={<NavbarLogin/>} data2={<Form title='Login' url='/ecloud/login' data={<Login1/>}/>}/>;
};

export default Login;
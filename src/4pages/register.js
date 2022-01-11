import React from 'react';
import DashboardLayout from '../3layouts/dashboard.js';
import Form from '../3layouts/form.js';
import Register1 from '../2parts/register1.js';
import NavbarRegister from '../2parts/navbar-register.js';


const Register = () => {
    return <DashboardLayout data1={<NavbarRegister/>} data2={<Form title='Register' url='/ecloud/register' data={<Register1/>}/>}/>;
};

export default Register;
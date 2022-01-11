import React from 'react';
import LinkButton1 from '../1coreui/buttons/link_button1.js';
import LinkButton2 from '../1coreui/buttons/link_button2.js';
require('./../images/ecloud-logo.png');


const Navbar1 = () => {
    return (
        <span>
            <LinkButton2 url='https://127.0.0.1/ecloud/' file='ecloud-logo.png'/>
            <LinkButton1 url='https://127.0.0.1/ecloud/login' text='Login'/>
        </span>
    );
};

export default Navbar1;
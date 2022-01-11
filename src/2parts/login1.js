import React from 'react';
import TextInput1 from '../1coreui/inputs/text-input1.js';
import SubmitButton1 from '../1coreui/buttons/submit-button1.js';
require('./../images/email-block.png');
require('./../images/lock-block.png');

const Login1 = () => {
    return (
        <span>
            <TextInput1 title='Email' type='email' id='email' name='email' file='email-block.png' prompt='Enter your Email'/>
            <TextInput1 title='Password' type='password' id='password' name='password' file='lock-block.png' prompt='Enter your Password'/>
            <SubmitButton1 prompt='Submit'/>
        </span>
    );
};

export default Login1;

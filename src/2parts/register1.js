import React from 'react';
import TextInput1 from '../1coreui/inputs/text-input1.js';
import SubmitButton1 from '../1coreui/buttons/submit-button1.js';
require('./../images/account-block.png');
require('./../images/country-block.png');
require('./../images/email-block.png');
require('./../images/lock-block.png');

const Register1 = () => {
    return (
        <span>
            <TextInput1 title='First Name' type='text' id='fname' name='fname' file='account-block.png' prompt='Enter Your First Name'/>
            <TextInput1 title='Last Name' type='text' id='lname' name='lname' file='account-block.png' prompt='Enter Your Last Name'/>
            <TextInput1 title='Country' type='text' id='country' name='country' file='country-block.png' prompt='Enter the Country You Live In'/>
            <TextInput1 title='Email' type='email' id='email' name='email' file='email-block.png' prompt='Enter an Email'/>
            <TextInput1 title='Password' type='password' id='password' name='password' file='lock-block.png' prompt='Enter a Password'/>
            <TextInput1 title='Confirm Password' type='password' id='cpassword' name='cpassword' file='lock-block.png' prompt='Confirm Your Password'/>
            <SubmitButton1 prompt='Submit'/>
        </span>
    );
};

export default Register1;
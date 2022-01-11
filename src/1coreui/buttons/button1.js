import React from 'react';
import './button1.scss';

const Button1 = (props) => {
    return <button className='button1' onClick={props.functions}>{props.text}</button>;
};

export default Button1;

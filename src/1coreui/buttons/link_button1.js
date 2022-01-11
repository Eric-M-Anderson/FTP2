import React from 'react';
import './link_button1.scss';

const LinkButton1 = (props) => {
    return <a className='button1' draggable="false" href={props.url}>{props.text}</a>;
};

export default LinkButton1;
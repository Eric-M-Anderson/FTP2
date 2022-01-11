import React from 'react';
import './link_button2.scss';

const LinkButton2 = (props) => {
    return (
    <a className='logo-image-link' draggable='false' href={props.url}>
        <img className='logo-image' draggable='false' src={'/images/' + props.file}/>
    </a>
    );
};

export default LinkButton2;
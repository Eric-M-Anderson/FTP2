import React from 'react';
import './text-input1.scss';

const TextInput1 = (props) => {
    return (
        <span>
            <label className='label1'>{props.title}</label>
            <div className='inputpackage1'>
                <img className='input-image' draggable='false' src={'/images/' + props.file}/>
                <input className='inputbox1' type={props.type} id={props.id} name={props.name} placeholder={props.prompt}/>
            </div>
        </span>
    );
};

export default TextInput1;

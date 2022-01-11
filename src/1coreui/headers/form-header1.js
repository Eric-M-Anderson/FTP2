import React from 'react';
import './form-header1.scss';

const FormHeader1 = (props) => {
    return (
        <div className='header1'>
            <h1 className='header2'>{props.title}</h1>
        </div>
    );
};

export default FormHeader1;

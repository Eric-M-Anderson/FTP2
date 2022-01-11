import React from 'react';
import './form.scss';
import FormHeader1 from '../1coreui/headers/form-header1.js';
require('./../images/blue-strips.png');

const FormLayout = (props) => {
    return (
        <div className='box1'>
            <FormHeader1 title={props.title}/>
            <form action={props.url} method='post'>
                {props.data}
            </form>
        </div>
    );
};

export default FormLayout;
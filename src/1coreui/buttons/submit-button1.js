import React from 'react';
import './submit-button1.scss';

const SubmitButton1 = (props) => {
    return (
        <div>
            <input className='submit-button1' type='submit' value={props.value}/>
        </div>
    );
};

export default SubmitButton1;
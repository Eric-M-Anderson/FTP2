import React from 'react';
import './dashboard.scss';

const DashboardLayout = (props) => {
    return (
        <div className='grid1'>
            <div className='grid1-item'>
                {props.data1}
            </div>
            <div className='grid2-item'>
                {props.data2}
            </div>
        </div>
    );
};

export default DashboardLayout;

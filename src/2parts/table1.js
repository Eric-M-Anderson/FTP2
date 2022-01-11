import React from 'react';
import Table1 from '../1coreui/tables/table1.js';
import data from '../../file-data.json'
import LinkButton1 from '../1coreui/buttons/link_button1.js';

const columns = [
    {Header: 'Access Level', accessor: 'alevel'},
    {Header: 'Filename', accessor: 'file'},
    {Header: 'Type', accessor: 'type'},
    {Header: 'Upload Time', accessor: 'time'},
    {Header: 'Uploader', accessor: 'name'},
    {Header: 'Download', accessor: 'download'}
];

for(var i = 0; i < data.length; i++){
    data[i]['download'] = <LinkButton1 url='https://127.0.0.1/ecloud/' text='Download'/>;
    console.log(data[i]);
}
/*const data = [
    {alevel: 1, file: 'image1', type: 'PNG', time: '2021-09-19 10:30pm', name: 'Eric'},
    {alevel: 2, file: 'image1', type: 'PNG', time: '2021-09-19 10:30pm', name: 'Eric'},
    {alevel: 3, file: 'image1', type: 'PNG', time: '2021-09-19 10:30pm', name: 'Eric'}
];*/
//https://webpack.js.org/loaders/babel-loader/
const DashTable = async () => {
    var data = await fetch('https://127.0.0.1/ecloud/api');

    return (
        <span>
            <Table1 COLUMNS={columns} DATA={data}/>
        </span>
    );
};

export default DashTable;
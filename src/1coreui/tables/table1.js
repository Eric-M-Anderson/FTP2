import './table1.scss';
import LinkButton1 from '../buttons/link_button1.js';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
// import data
// import columns
const COLUMNS = [{Header: 'Access Level', accessor: 'alevel'}, {Header: 'Filename', accessor: 'file'}, {Header: 'Type', accessor: 'type'}, {Header: 'Upload Time', accessor: 'time'}, {Header: 'Uploader', accessor: 'name'}, {Header: 'Download', accessor: 'download'}];
const DATA = [{alevel: 1, file: 'image1', type: 'PNG', time: '2021-09-19 10:30pm', name: 'Eric', download: <LinkButton1 url='https://127.0.0.1/ecloud/' text='Download'/>}, {alevel: 2, file: 'image1', type: 'PNG', time: '2021-09-19 10:30pm', name: 'Eric'}, {alevel: 3, file: 'image1', type: 'PNG', time: '2021-09-19 10:30pm', name: 'Eric'}];

const Table1 = (props) => {
    /*const columns = useMemo(() => props.COLUMNS, []);
    const data = useMemo(() => props.DATA, []);*/

    //https://www.pluralsight.com/guides/how-to-pass-new-server-data-to-react.js-components
    const columns = props.COLUMNS;
    const data = props.DATA;

    const tableInstance = useTable({columns, data});

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}   
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                        </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Table1;

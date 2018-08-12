import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Report = (props) => {
    let data = props.data;
    let countsWithLabels = {};
    data.forEach((item) => {
        if (!(item.incident_type_desc in countsWithLabels)) {
            countsWithLabels[item.incident_type_desc] = 1;
        }
        else {
            countsWithLabels[item.incident_type_desc] += 1;
        }
    });

    let countsAsObjects = [];
    for (const [key, value] of Object.entries(countsWithLabels)) {
        countsAsObjects.push({
            description: key,
            value: value
        });
    }

    const columns = [
        {
            Header: "Description",
            accessor: "description"
        },
        {
            Header: "Count",
            accessor: "value"
        }
    ];

    return <ReactTable
            data={countsAsObjects}
            columns={columns}
            showPageSizeOptions={false}
            defaultPageSize={20}
    />;
};

export default Report;
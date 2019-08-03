import React, { useState, useEffect } from 'react';
import { Grid, Table, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-bootstrap4';
import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import businessLicenseData from '../data/rows-city-business-licenses.json';

const COLUMNS = businessLicenseData.meta.view.columns.map(e => ({ name: e.fieldName, title: e.name }));
const ROWS = businessLicenseData.data.slice(0, 100);
const PROCESSED_ROWS
    = ROWS
        .map(e => e.map(
            (elem, i) => ({ [COLUMNS[i].name]: elem })
        ))
        .map(e => ({ ...e.reduce((prev, curr) => Object.assign(prev, curr), {}) }
        ));

export default () => {
    const [pageSize, setPageSize] = useState(20);

    return (
        <div className="mb5">
            <h1>GridView</h1>
            <label for='pageSize'>
                Page Size
                <input name='pageSize' type='number' value={pageSize} onChange={setPageSize} />
            </label>
            <Grid
                rows={PROCESSED_ROWS}
                columns={COLUMNS}
            >
                <PagingState
                    defaultCurrentPage={0}
                    pageSize={pageSize}
                />
                <IntegratedPaging />
                <Table />
                <TableHeaderRow />
                <PagingPanel />
            </Grid>
        </div>
    )
}

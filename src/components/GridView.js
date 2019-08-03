import React from 'react';
import { Grid, Table, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-bootstrap4';
import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import businessLicenseData from '../data/rows-city-business-licenses.json';

const COLUMNS = businessLicenseData.meta.view.columns.map(e => ({ name: e.fieldName, title: e.name }));
const ROWS = businessLicenseData.data;
const PROCESSED_ROWS
    = ROWS
        .map(e => e.map(
            (elem, i) => {
                console.log('inside', elem, i);
                return ({ [COLUMNS[i].name]: elem });
            }
        ))
        .map(e => ({ ...e.reduce((prev, curr) => Object.assign(prev, curr), {}) }
        ));

class GridView extends React.Component {
    render() {
        return (
            <div className="mb5">
                <h1>GridView</h1>
                <Grid
                    rows={PROCESSED_ROWS}
                    columns={COLUMNS}
                >
                    <PagingState
                        defaultCurrentPage={0}
                        pageSize={5}
                    />
                    <IntegratedPaging />
                    <Table />
                    <TableHeaderRow />
                    <PagingPanel />
                </Grid>
            </div>
        )
    }
}

export default GridView;
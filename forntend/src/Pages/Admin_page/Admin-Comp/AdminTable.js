
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  { field: 'Update', headerName: 'Update', width: 130 },
];

const rows = [
  
    { "id": 1, "lastName": "Snow", "firstName": "Jon", "age": 35 },
    { "id": 2, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
    { "id": 3, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
    { "id": 4, "lastName": "Stark", "firstName": "Arya", "age": 16 },
    { "id": 5, "lastName": "Targaryen", "firstName": "Daenerys", "age": null },
    { "id": 6, "lastName": "Melisandre", "firstName": null, "age": 150 },
    { "id": 7, "lastName": "Clifford", "firstName": "Ferrara", "age": 44 },
    { "id": 8, "lastName": "Frances", "firstName": "Rossini", "age": 36 },
    { "id": 9, "lastName": "Roxie", "firstName": "Harvey", "age": 65 },
    { "id": 10, "lastName": "Snow", "firstName": "Jon", "age": 35 },
    { "id": 11, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
    { "id": 12, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
    { "id": 13, "lastName": "Stark", "firstName": "Arya", "age": 16 },
    { "id": 14, "lastName": "Targaryen", "firstName": "Daenerys", "age": null },
    { "id": 15, "lastName": "Melisandre", "firstName": null, "age": 150 },
    { "id": 16, "lastName": "Clifford", "firstName": "Ferrara", "age": 44 },
    { "id": 17, "lastName": "Frances", "firstName": "Rossini", "age": 36 },
    { "id": 18, "lastName": "Roxie", "firstName": "Harvey", "age": 65 },
    { "id": 19, "lastName": "Snow", "firstName": "Jon", "age": 35 },
    { "id": 20, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
    { "id": 21, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
    { "id": 22, "lastName": "Stark", "firstName": "Arya", "age": 16 },
    { "id": 23, "lastName": "Targaryen", "firstName": "Daenerys", "age": null },
    { "id": 24, "lastName": "Melisandre", "firstName": null, "age": 150 },
    { "id": 25, "lastName": "Clifford", "firstName": "Ferrara", "age": 44 },
    { "id": 26, "lastName": "Frances", "firstName": "Rossini", "age": 36 },
    { "id": 27, "lastName": "Roxie", "firstName": "Harvey", "age": 65 },
    { "id": 28, "lastName": "Snow", "firstName": "Jon", "age": 35 },
    { "id": 29, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
    { "id": 30, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
    { "id": 31, "lastName": "Stark", "firstName": "Arya", "age": 16 },
    { "id": 32, "lastName": "Targaryen", "firstName": "Daenerys", "age": null },
    { "id": 33, "lastName": "Melisandre", "firstName": null, "age": 150 },
    { "id": 34, "lastName": "Clifford", "firstName": "Ferrara", "age": 44 },
    { "id": 35, "lastName": "Frances", "firstName": "Rossini", "age": 36 },
    { "id": 36, "lastName": "Roxie", "firstName": "Harvey", "age": 65 }
  
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 700, width: '80%' ,padding:3,marginLeft:"90px",marginTop:"100px"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10,15,20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
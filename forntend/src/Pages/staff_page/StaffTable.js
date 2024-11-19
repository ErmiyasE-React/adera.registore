import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First Name', width: 130 },
  { field: 'last_name', headerName: 'Last Name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.first_name || ''} ${params.row.last_name || ''}`,
  },
  { field: 'mom_name', headerName: 'Mother’s Name', width: 160 },
  { field: 'sex', headerName: 'Sex', width: 100 },
  { field: 'income', headerName: 'Income', type: 'number', width: 120 },
];

const StaffTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setRows(response.data.users || []);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Paper
      sx={{
        height: 700,
        width: '80%',
        padding: 3,
        marginLeft: '90px',
        marginTop: '100px',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default StaffTable;

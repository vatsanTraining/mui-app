import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Typography  } from '@mui/material';
const ShowData = () => {

    const rows = [
        { id: 1, col1: 'Ramesh', col2: '95' },
        { id: 2, col1: 'Suresh', col2: '80' },
        { id: 3, col1: 'Rajesh', col2: '76' },
      ];
      
      const columns = [
        { field: 'col1', headerName: 'Student Name', width: 150 },
        { field: 'col2', headerName: 'Mark Scored', width: 150 },
      ];

  return (
    <div>
        <Typography variant='h4'>My Application</Typography>
        <DataGrid rows={rows} columns={columns}/>
    </div>
  )
}

export default ShowData
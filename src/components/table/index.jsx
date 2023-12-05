import React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import styles from './styles.module.scss';

const columns: GridColDef[] = [
    {
      field: 'name', headerName: 'Name', width: 200, renderCell: (params) => {
        console.log(params);
        return (
          <>
            <Avatar src={params.value.avatar}/>
            {params.value.name}
          </>
        );
      }
    },
    {
      field: 'company',
      headerName: 'Company',
      width: 150,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 150
    },
    {
      field: 'verified',
      headerName:
        'Verified',
      type:
        'number',
      width:
        170,
    }
    ,
    {
      field: 'status',
      headerName:
        'Status',
      description:
        'This column has a value getter and is not sortable.',
      sortable:
        false,
      width:
        160,
      className: styles.status,
    }
    ,
  ]
;

const rows = [
  {
    id: 1,
    name: {
      name: "Adrienne Morar",
      avatar:
        "https://cdn-icons-png.flaticon.com/128/2335/2335114.png",
    },
    company: 'Runolfsson LLC',
    role: 'Backend Developer',
    verified: 'No',
    status: 'Active'
  },
  {
    id: 2,
    name: {
      name: "Becky Ernser",
      avatar:
        "https://cdn-icons-png.flaticon.com/128/949/949677.png",
    },
    company: 'Fadel-Torp',
    role: 'Leader',
    verified: 'No',
    status: 'Active'},
  {
    id: 3,
    name: {
      name: "Colin Osinski",
      avatar:
        "https://cdn-icons-png.flaticon.com/128/3006/3006876.png",
    },
    company: 'Spencer, Town and Bogan',
    role: 'UI Designer',
    verified: 'Yes',
    status: 'Banned'
  },
  {
    id: 4,
    name: {
      name: "Dan Lindgren",
      avatar:
        "https://cdn-icons-png.flaticon.com/128/3048/3048189.png",
    },
    company: 'Cummerata-Casper',
    role: 'Full Stack Designer',
    verified: 'Yes',
    status: 'Active'
  },
  {
    id: 5,
    name: {
      name: "Denis O\'Reilly",
      avatar:
        "https://cdn-icons-png.flaticon.com/128/11107/11107534.png",
    },
    company: 'Auer, Watsica and Roberts',
    role: 'UI/UX Designer',
    verified: 'Yes',
    status: 'Active'
  },

];

const Table = () => {
  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 5},
          },
        }}
        pageSizeOptions={[0,5]}
        checkboxSelection
      />
    </div>
  )
}

export default Table;


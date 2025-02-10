import React from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper }   from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { styled } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  table: {
    minWidth: 1080,
  },
}));
const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/id/236/40/60',
    'name': 'Kim',
    'birthday': '980413',
    'gender': 'female',
    'job': 'developer'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/237/40/60',
    'name': 'Gwon',
    'birthday': '991213',
    'gender': 'male',
    'job': 'athlete'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/238/40/60',
    'name': 'Yoo',
    'birthday': '666666',
    'gender': 'female',
    'job': 'mom'
  }
]

class App extends React.Component {
  render() {
    return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>no.</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}

export default App;

import React, { useState } from 'react';
import { Button, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import axios from 'axios';

export default function Successful() {
  const [loginUsers, setLoginUsers] = useState([]);

  const handleViewDatabase = () => {
    axios.get('http://localhost:4500/api/getUser')
      .then(response => {
        setLoginUsers(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching database:', error);
        // Handle error state or show an error message
      });
  };

  return (
    <div>
      <h1 style={{ color: 'white' }}>Successfully stored to database</h1>
      <Button variant='contained' color='secondary' onClick={handleViewDatabase}>View the database</Button>

      {loginUsers.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: '20px', background: 'black' }}>
          <Table style={{maxWidth : '1600px'}}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: 'white', borderBottom: '1px solid white' }}>Refer Name</TableCell>
                <TableCell style={{ color: 'white', borderBottom: '1px solid white' }}>Refer Mail</TableCell>
                <TableCell style={{ color: 'white', borderBottom: '1px solid white' }}>Referee Name</TableCell>
                <TableCell style={{ color: 'white', borderBottom: '1px solid white' }}>Referee Mail</TableCell>
                <TableCell style={{ color: 'white', borderBottom: '1px solid white' }}>Refer Course</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loginUsers.map(user => (
                <TableRow key={user.id} style={{ borderBottom: '1px solid white' }}>
                  <TableCell style={{ color: 'white' }}>{user.refer_name}</TableCell>
                  <TableCell style={{ color: 'white' }}>{user.refer_mail}</TableCell>
                  <TableCell style={{ color: 'white' }}>{user.referee_name}</TableCell>
                  <TableCell style={{ color: 'white' }}>{user.referee_mail}</TableCell>
                  <TableCell style={{ color: 'white' }}>{user.refer_course}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

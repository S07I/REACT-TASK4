import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const boxStyle = {
    backgroundColor: 'black', // Set the background color of the box to black
    padding: '20px',
    borderRadius: '10px',
  };
  const tableStyle = {
    backgroundColor: 'black' ,// Set the background color to black
    width: '100%',
    borderCollapse: 'collapse',

  };
  const textStyle = {
    color: 'white', // Set text color to white
  };
  
  return (
    <div style={boxStyle}>
      <h1 style={textStyle}>Dummy Data</h1>
      <table border={1} style={tableStyle} >
        <thead>
          <tr>
            <th style={textStyle}>Sno</th>
            <th style={textStyle}>Profile Pic</th>
            <th style={textStyle}>First Name</th>
            <th style={textStyle}>Last Name</th>
            <th style={textStyle}>Gender</th>
            <th style={textStyle}>E-mail</th>
            <th style={textStyle}>Username</th>
            <th style={textStyle}>Domain</th>
            <th style={textStyle}>IP</th>
            <th style={textStyle}>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={textStyle}>{index + 1}</td>
              <td>
                <img src={user.image} alt="Profile Pic" width="50" height="50" />
              </td>
              <td style={textStyle}>{user.firstName}</td>
              <td style={textStyle}>{user.lastName}</td>
              <td style={textStyle}>{user.gender}</td>
              <td style={textStyle}>{user.email}</td>
              <td style={textStyle}>{user.username}</td>
              <td style={textStyle}>{user.domain}</td>
              <td style={textStyle}>{user.ip}</td>
              <td style={textStyle}>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;



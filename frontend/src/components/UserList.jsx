

// src/components/UserList.jsx

import React from 'react';
import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data);
    })
      .catch(error => console.error('Error fetching users:', error)); //Error is here
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.username}) - Favorite Color: {user.password}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

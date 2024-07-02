

// src/components/UserList.jsx

import React from 'react';
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // [ ] [!TODO] Change to environment variable with full (IP / URL)
    // - Only works because front and backend are both on WSL2 so same "localhost"
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data);
    })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.username}) - Password: {user.password}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

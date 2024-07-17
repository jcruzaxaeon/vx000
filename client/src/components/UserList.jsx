

// ./src/components/UserList.jsx
// src/components/UserList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../services/auth';
const apiUrl = import.meta.env.VITE_API_URL;

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = getToken();
        if (!token) {
          setError('No authentication token found. Please log in.');
          return;
        }

        const response = await axios.get(`${apiUrl}/v1/api/users`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError(error.response?.data?.message || 'An error occurred while fetching users.');
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.user_id}>{user.name} ({user.username})</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;



// import React from 'react';
// import { useEffect, useState } from 'react';

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // [ ] [!TODO] Change to environment variable with full (IP / URL)
//     // - Only works because front and backend are both on WSL2 so same "localhost"
//     fetch('http://localhost:3000/v1/api/users')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setUsers(data);
//     })
//       .catch(error => console.error('Error fetching users:', error));
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name} ({user.username}) - Password: {user.password}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;



// src/components/TargetList.jsx

import React from 'react';
import { useEffect, useState } from 'react';

function TargetList() {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    // [ ] [!TODO] Change to environment variable with full (IP / URL)
    // - Only works because front and backend are both on WSL2 so same "localhost"
    fetch('http://localhost:3000/api/targets')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTargets(data);
    })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Target List</h2>
      <ul>
        {targets.map(target => (
          <li key={target.id}>{target.name} ({target.categories}) {target.owner_user_key}</li>
        ))}
      </ul>
    </div>
  );
};

export default TargetList;

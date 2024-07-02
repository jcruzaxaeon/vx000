

// src/components/TargetList.jsx

import React from 'react';
import { useEffect, useState } from 'react';
import config from '../../config.js';

function TargetList() {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    // [ ] [!TODO] Change to environment variable with full (IP / URL)
    // - Only works because front and backend are both on WSL2 so same "localhost"
    const apiUrl = config['production'].apiUrl;

    fetch(`/api/targets`) // Previously hard-coded `http://localhost:3000` / `${apiUrl}/api/targets`
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



// .client/src/components/NodeList.jsx

import React from 'react';
import { useEffect, useState } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;


function NodeList() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    // [ ] [!TODO] Change to environment variable with full (IP / URL)
    // - Only works because front and backend are both on WSL2 so same "localhost"
    fetch(`${apiUrl}/api/nodes`) // Previously hard-coded `http://localhost:3000` / `${apiUrl}/api/nodes` / https://vx000-production.up.railway.app
      .then(response => response.json())
      .then(data => {
        setNodes(data);
    })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Node List</h2>
      <ul>
        {nodes.map(node => (
          <li key={node.node_id}>ID{node.node_id}: {node.name} ({node.categories}) {node.owner_fk}</li>
        ))}
      </ul>
    </div>
  );
};

export default NodeList;

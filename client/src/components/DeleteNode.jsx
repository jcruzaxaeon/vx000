

// ./src/components/DeleteNode.jsx

import { useRef } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

function DeleteNode() {

    const nodeId = useRef(0);

    async function handleDelete() {
        try {
            const rNodeId = nodeId.current.value;

            const endpoint = `api/nodes/delete/${rNodeId}`;
            const url = `${apiUrl}/${endpoint}`;
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                 },
            };

            const res = await fetch(url, options);
            let data = null;
            try { data = await res.json(); } catch {}
        } 
        catch(err) {
            console.log(err)
        }
    }

    return (<>
            <div>
                <label htmlFor="nodeId">Node Id:</label>
                <input
                    ref={nodeId}
                    id="nodeId"
                    name="nodeId"
                    type="text"
                    defaultValue='0'
                    // value={nodeId}
                    // onChange={(e) => setName(e.node.value)}
                    required
                />
            </div>
            <button className="button button-secondary" onClick={handleDelete}>Delete</button>
    </>);
}

export default DeleteNode;
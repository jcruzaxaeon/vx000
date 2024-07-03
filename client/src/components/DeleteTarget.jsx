

// ./src/components/DeleteTarget.jsx

import { useRef } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

function DeleteTarget() {

    const targetId = useRef(0);

    async function handleDelete() {
        try {
            const rTargetId = targetId.current.value;

            const endpoint = `api/targets/delete/${rTargetId}`;
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
                <label htmlFor="targetId">Target Id:</label>
                <input
                    ref={targetId}
                    id="targetId"
                    name="targetId"
                    type="text"
                    defaultValue='0'
                    // value={targetId}
                    // onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <button className="button button-secondary" onClick={handleDelete}>Delete</button>
    </>);
}

export default DeleteTarget;
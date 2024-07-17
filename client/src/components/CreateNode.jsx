

// .client/src/components/CreateNode.jsx

import { useState, useRef } from 'react';
import { getToken } from '../services/auth.js';
import { jwtDecode } from 'jwt-decode';

const apiUrl = import.meta.env.VITE_API_URL;

function CreateNode() {

    const name = useRef('noname');
    const categories = useRef('noref');

    // [ ] Ensure that authentication has already been done (protect route)
    const userId = jwtDecode(getToken()).userId;

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const node = {
                name: name.current.value,
                categories: categories.current.value,
                owner_fk: parseInt(userId, 10),
                // userId: userId.current.value,
            }

            const endpoint = `api/nodes`;
            const url = `${apiUrl}/${endpoint}`;
            const options = {
                method: 'POST',
                body: JSON.stringify(node),
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                },
            };

            console.log("Options:", options);
            const res = await fetch(url, options);
            let data = null;
            try { data = await res.json(); } catch { }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    ref={name}
                    id="name"
                    name="name"
                    type="text"
                    // defaultValue=''
                    // value={name}
                    // onChange={(e) => setName(e.node.value)}
                    required
                />
                <label htmlFor="categories">Categories:</label>
                <input
                    ref={categories}
                    id="categories"
                    name="categories"
                    type="text"
                    // defaultValue=''
                    // value={categories}
                    // onChange={(e) => setName(e.node.value)}
                    required
                />
                {/* <label htmlFor="userid">User Id:</label>
                <input
                    ref={userId}
                    id="userId"
                    name="userId"
                    type="text"
                    // defaultValue=''
                    // value={userId}
                    // onChange={(e) => setName(e.node.value)}
                    required
                /> */}
            </div>
            <button className="button" type="submit">Create Node</button>
            {/* <button className="button button-secondary" onClick={handleCancel}>Cancel</button> */}
        </form>
    </>);
}

export default CreateNode;


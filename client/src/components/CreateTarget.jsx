

// .client/src/components/CreateTarget.jsx

import { useState, useRef } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

function CreateTarget() {

    const name = useRef('noname');
    const categories = useRef('noref');
    const userId = useRef(0);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const target = {
                name: name.current.value,
                categories: categories.current.value,
                userId: userId.current.value,
            }

            const endpoint = `api/targets`;
            const url = `${apiUrl}/${endpoint}`;
            const options = {
                method: 'POST',
                body: JSON.stringify(target),
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
                    // onChange={(e) => setName(e.target.value)}
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
                    // onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="userid">User Id:</label>
                <input
                    ref={userId}
                    id="userId"
                    name="userId"
                    type="text"
                    // defaultValue=''
                    // value={userId}
                    // onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <button className="button" type="submit">Create Target</button>
            {/* <button className="button button-secondary" onClick={handleCancel}>Cancel</button> */}
        </form>
    </>);
}

export default CreateTarget;


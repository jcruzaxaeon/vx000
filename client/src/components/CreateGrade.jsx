

// ./client/src/components/CreateGrade.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
const apiUrl = import.meta.env.VITE_API_URL;
// import api from '../api/api'; // Assuming an API wrapper using axios or fetch

function CreateGrade() {
    const [node, setNode] = useState('');
    const [grade, setGrade] = useState('');
    const [categories, setCategories] = useState('');
    const [comment, setComment] = useState('');
    const [tags, setTags] = useState('');
    const [fkUser, setFkUser] = useState(0); // Manual input for foreign key
    const [fkTarget, setFkTarget] = useState(0); // Manual input for foreign key
    const nav = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const newGrade = {
                node,
                grade,
                categories,
                comment,
                tags,
                fk_user: fkUser,
                fk_target: fkTarget,
            };

            const endpoint = `v1/api/grades`;
            const url = `${apiUrl}/${endpoint}`;
            const options = {
                method: 'POST',
                body: JSON.stringify(newGrade),
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                },
            };

            const res = await fetch(url, options);
            let data = null;
            try { data = await res.json(); } catch { }

            console.log('Grade created:', newGrade.data);
            nav(`http://localhost:5173/grades`); // Redirect to grades list after successful creation
        } catch (err) {
            console.error('Error creating grade:', err);
            // Handle errors appropriately (e.g., display error message to user)
        }
    };

    return (
        <div>
            <h2>Create Grade</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="node">Name:</label>
                    <input
                        id="node"
                        name="node"
                        type="text"
                        value={node}
                        onChange={(e) => setNode(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="grade">Grade:</label>
                    <input
                        id="grade"
                        name="grade"
                        type="text"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="categories">Categories:</label>
                    <input
                        id="categories"
                        name="categories"
                        type="text"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="tags">Tags:</label>
                    <input
                        id="tags"
                        name="tags"
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="fkUser">Foreign Key (User):</label>
                    <input
                        id="fkUser"
                        name="fkUser"
                        type="number"
                        value={fkUser}
                        onChange={(e) => setFkUser(parseInt(e.target.value))} // Ensure numeric input
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fkTarget">Foreign Key (Target):</label>
                    <input
                        id="fkTarget"
                        name="fkTarget"
                        type="number"
                        value={fkTarget}
                        onChange={(e) => setFkTarget(parseInt(e.target.value))} // Ensure numeric input
                        required
                    />
                </div>
                <button type="submit">Create Grade</button>
            </form>
        </div>
    );
}

export default CreateGrade;


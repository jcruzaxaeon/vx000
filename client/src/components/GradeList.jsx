

// ./client/src/components/GradeList.jsx

import React from 'react';
import { useEffect, useState } from 'react';
// import api from '../api/api'; // Assuming an API wrapper using axios or fetch
const apiUrl = import.meta.env.VITE_API_URL;

function GradeList() {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                fetch(`${apiUrl}/v1/api/grades`) // https://vx000-production.up.railway.app
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        setGrades(data);
                    })
                // const response = await api.get('/grades');
                // const data = await response.data;
                // setGrades(data);
            } catch (err) {
                console.error('Error fetching grades:', err);
                // Handle errors appropriately (e.g., display error message to user)
            }
        };

        fetchGrades();
    }, []);

    return (
        <div>
            <h2>Grade List</h2>
            <ul>
                {grades.map((grade) => (
                    <li key={grade.id}>
                        <div>{grade.node_alias}</div>
                        <div>ID: {grade.id} - Grade: {grade.grade} ({grade.categories})</div>
                        {/* Add more displayed fields as needed (e.g., comment, tags) */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GradeList;


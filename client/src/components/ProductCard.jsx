import React, { useState } from "react";
import axios from 'axios';

const ProductCard = ({ id, name, email, gender, status }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedGender, setEditedGender] = useState(gender);
    const [editedStatus, setEditedStatus] = useState(status);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        // Update data in the backend
        const updatedData = {
            name: editedName,
            email: editedEmail,
            gender: editedGender,
            status: editedStatus
        };

        const token = "9a81181d25011b32ea9444d1f04d91349973da44006719a1e7e8868784d94533";
        axios.put(`https://gorest.co.in/public-api/users/${id}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Data updated successfully:', response.data.data);
                setEditMode(false);
            })
            .catch(error => {
                console.log('Error updating data:', error);
            });


        axios.put('http://localhost:5000/edit', updatedData)
            .then(response => {
                console.log('Data updated successfully:', response.user);
                setEditMode(false);
            })
            .catch(error => {
                console.log('Error updating data:', error);
            });
    };

    return (
        <div className="product">
            <h3>ID: {id}</h3>
            {
                editMode ? (
                    <>
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={editedEmail}
                            onChange={(e) => setEditedEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            value={editedGender}
                            onChange={(e) => setEditedGender(e.target.value)}
                        />
                        <input
                            type="text"
                            value={editedStatus}
                            onChange={(e) => setEditedStatus(e.target.value)}
                        />
                        <button onClick={handleSave}>Save</button>
                    </>
                ) : (
                    <>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Gender: {gender}</p>
                        <p>Status: {status}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </>
                )
            }
        </div>
    );
};

export default ProductCard;

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const res = await axios.post(
                "http://localhost:3000/create-post",
                formData
            );

            console.log("SUCCESS:", res.data);

            alert("Post created successfully");

            navigate('/feed');

        } catch (error) {
            console.log("FULL ERROR:", error);
            console.log("SERVER ERROR:", error.response?.data);

            alert(error.response?.data?.error || "Error creating post");
        }
    };

    return (
        <section className="create-post-section">

            <h1>Create post</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                />

                <input
                    type="text"
                    name="caption"
                    placeholder="Enter caption"
                    required
                />

                <button type="submit">
                    Submit
                </button>

            </form>

        </section>
    );
}

export default CreatePost;

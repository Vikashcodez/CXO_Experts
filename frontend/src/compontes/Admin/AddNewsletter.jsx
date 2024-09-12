// frontend/src/components/NewsletterForm.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewsletterForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!description || !imageUrl) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/newsletters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title,description, imageUrl })
            });

            if (response.ok) {
                navigate('/dashboard');
            } else {
                setError('Failed to add newsletter.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred.');
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl mb-4">Add Newsletter</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    placeholder="TiTle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <textarea
                    placeholder="Newsletter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 mb-4 w-full"
                    rows="4"
                ></textarea>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <button className="bg-blue-500 text-white p-2" type="submit">
                    Submit
                </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}

export default NewsletterForm;

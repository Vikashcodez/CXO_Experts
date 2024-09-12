import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function ServiceForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [details, setDetails] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, imageUrl, details })
        });
        navigate('/dashboard');
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl mb-4">Add Service</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Service Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    placeholder="Service Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="text"
                    placeholder="Service Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <ReactQuill value={details} onChange={setDetails} className="mb-4" />
                <button className="bg-blue-500 text-white p-2" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ServiceForm;

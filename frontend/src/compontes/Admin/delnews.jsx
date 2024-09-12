// frontend/src/components/HideDeleteNewsletter.js

import { useEffect, useState } from 'react';

function HideDeleteNewsletter() {
    const [newsletters, setNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchNewsletters = async () => {
        try {
            const response = await fetch('http://localhost:5000/newsletters');
            const data = await response.json();
            setNewsletters(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch newsletters.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNewsletters();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this newsletter?')) return;

        try {
            const response = await fetch(`http://localhost:5000/newsletters/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setNewsletters(newsletters.filter(newsletter => newsletter._id !== id));
            } else {
                alert('Failed to delete newsletter.');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred.');
        }
    };

    if (loading) return <p className="container mx-auto">Loading...</p>;
    if (error) return <p className="container mx-auto text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Hide/Delete Newsletters</h1>
            {newsletters.length === 0 ? (
                <p>No newsletters available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {newsletters.map(newsletter => (
                        <div key={newsletter._id} className="border p-4 rounded">
                             <p className="mb-2">{newsletter.title}</p>
                            <p className="mb-2">{newsletter.description}</p>
                            {newsletter.imageUrl && (
                                <img src={newsletter.imageUrl} alt="Newsletter" className="mb-2 w-full h-48 object-cover" />
                            )}
                            <button
                                onClick={() => handleDelete(newsletter._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HideDeleteNewsletter;

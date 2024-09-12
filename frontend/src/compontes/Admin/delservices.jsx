// frontend/src/components/HideDeleteServices.js

import { useEffect, useState } from 'react';

function HideDeleteServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchServices = async () => {
        try {
            const response = await fetch('http://localhost:5000/services');
            const data = await response.json();
            setServices(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch services.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this service?')) return;

        try {
            const response = await fetch(`http://localhost:5000/services/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setServices(services.filter(service => service._id !== id));
            } else {
                alert('Failed to delete service.');
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
            <h1 className="text-2xl mb-4">Hide/Delete Services</h1>
            {services.length === 0 ? (
                <p>No services available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(service => (
                        <div key={service._id} className="border p-4 rounded">
                            <h2 className="text-xl mb-2">{service.title}</h2>
                            <p className="mb-2">{service.description}</p>
                            {service.imageUrl && (
                                <img src={service.imageUrl} alt={service.title} className="mb-2 w-full h-48 object-cover" />
                            )}
                            <button
                                onClick={() => handleDelete(service._id)}
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

export default HideDeleteServices;

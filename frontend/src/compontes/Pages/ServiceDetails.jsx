import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'; // Use bubble theme for read-only display

function ServiceDetail() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchService = async () => {
        try {
            const response = await fetch(`http://localhost:5000/services`);
            const data = await response.json();
            const foundService = data.find(s => s._id === id);
            if (foundService) {
                setService(foundService);
            } else {
                setError('Service not found.');
            }
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch service.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchService();
    }, [id]);

    if (loading) return <p className="container mx-auto p-4">Loading...</p>;
    if (error) return <p className="container mx-auto p-4 text-red-500">{error}</p>;
    if (!service) return null;

    return (
        <div className="container mx-auto p-4">
            {/* Card Wrapper */}
            <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
                {/* Service Title */}
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">{service.title}</h1>

                {/* Service Image */}
                {service.imageUrl && (
                    <div className="flex justify-center mb-6">
                        <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="rounded-lg shadow-md object-cover w-full max-w-lg h-48"
                        />
                    </div>
                )}

                {/* Service Description */}
                <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                {/* Service Details (Rich Text) */}
                <div className="prose max-w-none">
                    <ReactQuill value={service.details} readOnly={true} theme="bubble" />
                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;

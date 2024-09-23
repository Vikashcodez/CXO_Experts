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
        <div className="container mx-auto p-8">
            {/* Card Wrapper */}
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
                {/* Service Title */}
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">{service.title}</h1>

                {/* Service Subtitle */}
                <h2 className="text-lg font-medium text-center text-gray-500 mb-6 italic">
                    Professional Solutions for {service.title}
                </h2>

                {/* Horizontal Divider */}
                <div className="border-b border-gray-300 mb-6"></div>

                {/* Service Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                    {service.description}
                </p>

                {/* Service Details (Rich Text) */}
                <div className="prose max-w-none text-gray-700">
                    <ReactQuill value={service.details} readOnly={true} theme="bubble" />
                </div>

                {/* Footer/Divider */}
                <div className="mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-500">
                    Thank you for choosing our services!
                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;

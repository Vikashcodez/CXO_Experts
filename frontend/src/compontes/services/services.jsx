import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ServicesList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        const response = await fetch('http://localhost:5000/services');
        const data = await response.json();
        setServices(data);
    };

    return (
        <div className="container mx-auto py-12 bg-gray-100 pt-24"> {/* Added pt-24 for spacing */}
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

            {/* Services Section */}
            <div className="relative">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {services.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ service }) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Split description into words and limit to 60 words
    const shortDescription = service.description.split(' ').slice(0, 60).join(' ');

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 relative">
            {/* Icon Section */}
            <div className="flex justify-center -mt-12 mb-4">
                <div className="bg-white text-white p-4 rounded-full">
                    <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        className="w-12 h-12 object-contain"
                    />
                </div>
            </div>

            {/* Service Title */}
            <h2 className="text-xl font-semibold mb-2 text-center">{service.title}</h2>

            {/* Service Description */}
            <p className="text-gray-600 mb-4 text-center">
                {shortDescription}...
            </p>

            {/* Call to Action Buttons */}
            <div className="text-center">
                {/* Both 'Read More' and 'Learn More' navigate to the same detailed page */}
                <Link
                    to={`/services/${service._id}`}
                    className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mr-4"
                >
                    Read More
                </Link>

               
            </div>
        </div>
    );
}

export default ServicesList;

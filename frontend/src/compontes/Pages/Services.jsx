import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ServicesList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        const response = await fetch('https://cxo-experts.onrender.com/services');
        const data = await response.json();
        setServices(data);
    };

    // Function to truncate description
    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };

    return (
        <div className="container mx-auto py-12 ">
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services & Solutions</h1>

            {/* Subtitle */}
            <p className="text-lg text-center mb-12">
                Enhance and secure your business with our professional services. We offer custom software development,
                expert IT consulting, and comprehensive cybersecurity solutions to support your success.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {services.map((service) => (
                    <div key={service._id} className="bg-white shadow-md rounded-lg p-6">
                        
                        {/* Image Section with Increased Size */}
                        <div className="flex justify-center mb-4">
                            <img 
                                src={service.imageUrl} 
                                alt={service.title} 
                                className="w-24 h-24 object-cover rounded-full" 
                            />
                        </div>

                        {/* Service Title */}
                        <h2 className="text-xl font-semibold mb-2 text-center">{service.title}</h2>

                        {/* Service Description */}
                        <p className="text-gray-600 mb-4 text-center">
                            {truncateDescription(service.description, 60)}
                        </p>

                        {/* Call to Action Button */}
                        <div className="text-center">
                            <Link
                                to={`/services/${service._id}`}
                                className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesList;
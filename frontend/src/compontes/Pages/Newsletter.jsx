import { useEffect, useState } from 'react';

function NewslettersList() {
    const [newsletters, setNewsletters] = useState([]);

    useEffect(() => {
        fetchNewsletters();
    }, []);

    const fetchNewsletters = async () => {
        const response = await fetch('https://cxo-experts.onrender.com/newsletters');
        const data = await response.json();
        setNewsletters(data);
    };

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Newsletters</h1>
            <div className="space-y-12">
                {newsletters.map((newsletter, index) => (
                    <div
                        key={newsletter._id}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                            index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                        } ${index % 2 === 0 ? 'bg-blue-100' : 'bg-gray-100'} p-6 rounded-lg`} // Alternating background colors
                    >
                        {/* Conditional rendering for alternating layout */}
                        {index % 2 === 0 ? (
                            <>
                                <img
                                    src={newsletter.imageUrl}
                                    alt={newsletter.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-2xl font-bold mb-4">{newsletter.title}</h2>
                                    <p className="text-gray-600 mb-6">{newsletter.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-2xl font-bold mb-4">{newsletter.title}</h2>
                                    <p className="text-gray-600 mb-6">{newsletter.description}</p>
                                </div>
                                <img
                                    src={newsletter.imageUrl}
                                    alt={newsletter.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewslettersList;

import { Link } from 'react-router-dom';
import { FaPlusCircle, FaNewspaper, FaTrashAlt, FaTools } from 'react-icons/fa'; // Correct icon for services

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-8 text-blue-600">Admin Dashboard</h1>
            <div className="space-y-6">
                {/* Add Services Card */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                    <div className="text-blue-500 text-4xl">
                        <FaPlusCircle />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Add Services</h2>
                        <p className="text-gray-600 mb-4">Add new services to be displayed on the website.</p>
                        <Link to="/add-service" className="text-blue-500 hover:underline">
                            Go to Add Services
                        </Link>
                    </div>
                </div>

                {/* Add Newsletter Card */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                    <div className="text-blue-500 text-4xl">
                        <FaNewspaper />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Add Newsletter</h2>
                        <p className="text-gray-600 mb-4">Create and publish newsletters for your users.</p>
                        <Link to="/add-newsletter" className="text-blue-500 hover:underline">
                            Go to Add Newsletter
                        </Link>
                    </div>
                </div>

                {/* Hide/Delete Services Card */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                    <div className="text-blue-500 text-4xl">
                        <FaTools /> {/* Updated icon */}
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Hide/Delete Services</h2>
                        <p className="text-gray-600 mb-4">Manage existing services by hiding or deleting them.</p>
                        <Link to="/hide-delete-services" className="text-blue-500 hover:underline">
                            Go to Hide/Delete Services
                        </Link>
                    </div>
                </div>

                {/* Hide/Delete Newsletter Card */}
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                    <div className="text-blue-500 text-4xl">
                        <FaTrashAlt />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Hide/Delete Newsletter</h2>
                        <p className="text-gray-600 mb-4">Manage newsletters by hiding or deleting them.</p>
                        <Link to="/hide-delete-newsletters" className="text-blue-500 hover:underline">
                            Go to Hide/Delete Newsletter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

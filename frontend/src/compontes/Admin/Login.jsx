import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Im from '../../assets/Images/x3.png'

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://cxo-experts.onrender.com/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.success) {
            navigate('/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form Section */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
                <div className="max-w-xs w-full">
                    <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to CXO Experts</h1>
                    <p className="text-lg mb-6 text-gray-700">ADMIN LOGIN</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Phone or Email address"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-300 w-full p-3 mb-4 rounded-lg"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 w-full p-3 mb-4 rounded-lg"
                        />
                        <button
                            className="bg-blue-500 w-full text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                            type="submit"
                        >
                            Log In
                        </button>
                    </form>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                   
                </div>
            </div>

            {/* Right Side - Illustration Section */}
            <div className="w-1/2 bg-gradient-to-r from-green-300 to-green-500 flex justify-center items-center">
                <img
                    src={Im}
                    alt="Tech Illustration"
                    className="w-3/5 h-auto"
                />
            </div>
        </div>
    );
}

export default AdminLogin;

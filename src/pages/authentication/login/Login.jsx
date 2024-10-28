import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import auth from '../../../firebase/firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate();

    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLoginError('');
        setSuccess('');

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('login successful');
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }

    const handleResetPassword = () => {
        console.log('send reset email', emailRef.current.value)
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check your email');
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white border border-red-400 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
                    Admin Login
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            ref={emailRef}
                            className="w-full p-3 mt-1 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full p-3 mt-1 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Login
                    </button>
                </form>
                {loginError && <p className="mt-4 text-center text-red-500">{loginError}</p>}
                {success && <p className="mt-4 text-center text-green-500">{success}</p>}

                
            </div>
        </div>

    );
};

export default Login;
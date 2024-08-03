import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#010028]">
            <div className="w-11/12 max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Login to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                Email address
                            </label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                required 
                                autoComplete="email" 
                                className="block w-full px-4 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                                Password
                            </label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                required 
                                autoComplete="current-password" 
                                className="block w-full px-4 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                id="remember_me" 
                                name="remember_me" 
                                type="checkbox" 
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button 
                            type="submit" 
                            className="flex justify-center w-full px-4 py-2 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

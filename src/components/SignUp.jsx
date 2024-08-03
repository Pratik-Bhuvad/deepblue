import React from 'react';

const SignUp = () => {
    return (
        <div className="flex justify-center h-screen pt-[10vh] bg-[#010028] px-2 py-3">
            <div className="w-11/12 md:w-4/5 lg:w-1/3 lg:h-4/5 rounded-2xl border-2 bg-white flex flex-col justify-center px-6 lg:px-8 text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-base lg:text-3xl font-extrabold leading-9 tracking-tight text-gray-900">Sign up for a new account</h2>
                </div>

                <div className="mt-2 lg:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="full-name" className="block text-xs lg:text-xl lg:mb-2 font-medium text-gray-700 leading-6">Full Name</label>
                            <div className="mt-1 lg:mt-2">
                                <input id="full-name" name="full-name" type="text" required className="block p-4 text-xs lg:text-xl w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs lg:text-xl lg:mb-2 font-medium text-gray-700 leading-6">Email address</label>
                            <div className="mt-1 lg:mt-2">
                                <input id="email" name="email" type="email" required autoComplete="email" className="block p-4 text-xs lg:text-xl w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-xs lg:text-xl lg:mb-2 font-medium text-gray-700 leading-6">Password</label>
                            <div className="mt-1 lg:mt-2">
                                <input id="password" name="password" type="password" required autoComplete="new-password" className="block p-4 text-xs lg:text-xl w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block text-xs lg:text-xl lg:mb-2 font-medium text-gray-700 leading-6">Confirm Password</label>
                            <div className="mt-1 lg:mt-2">
                                <input id="confirm-password" name="confirm-password" type="password" required autoComplete="new-password" className="block p-4 text-xs lg:text-xl w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 lg:py-3 mt-6 text-xs lg:text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    <p className="text-center text-sm lg:text-xl text-gray-500 lg:my-5 my-1">Or continue with</p>

                    <div className="flex justify-center mt-1 lg:mt-4 space-x-4">
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-50">
                            <i className="fab fa-google h-5 w-5 mr-2 text-red-600"></i>
                            <span className="text-xs font-semibold">Google</span>
                        </button>
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-50">
                            <i className="fab fa-facebook-f h-5 w-5 mr-2 text-blue-600"></i>
                            <span className="text-xs font-semibold">Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

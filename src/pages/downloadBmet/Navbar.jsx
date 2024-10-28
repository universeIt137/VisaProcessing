import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="w-11/12 mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730033517/Other%20data/q3udzw8epukypoyptlyz.svg"
                        alt="Logo"
                        className="h-10 mr-4"
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-8 text-[18px] font-semibold text-gray-800">
                    <a href="#home" className="hover:text-blue-500">Home</a>
                    <div className="relative group">
                        <button className="hover:text-blue-500 flex items-center">
                            Services
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                        <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-1">
                            <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
                            <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
                        </div>
                    </div>
                    <a href="#recruitment" className="hover:text-blue-500">Recruitment</a>
                    <div className="relative group">
                        <button className="hover:text-blue-500 flex items-center">
                            Government
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                        <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-1">
                            <a href="#gov1" className="block px-4 py-2 hover:bg-gray-100">Government 1</a>
                            <a href="#gov2" className="block px-4 py-2 hover:bg-gray-100">Government 2</a>
                        </div>
                    </div>
                    <a href="#portals" className="hover:text-blue-500">Portals</a>
                    <a href="#download-cards" className="hover:text-blue-500">Download Cards</a>
                </div>

                {/* Language and App Download - Desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                    <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[10px]">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730033633/Other%20data/ixbuke4pljlsqb2v15hf.svg" alt="QR Code" className="h-5 mr-2" />
                        Get Ami <br /> Probashi App
                    </button>
                    <div className="flex items-center space-x-2 border p-1 rounded-2xl">
                        <button className="bg-teal-500 text-white px-2 py-1 rounded-full">EN</button>
                        <span>|</span>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full">বা</button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden">
                    <div className="flex flex-col space-y-4 text-center py-4 text-gray-800 text-lg">
                        <a href="#home" className="hover:text-blue-500">Home</a>
                        <a href="#services" className="hover:text-blue-500">Services</a>
                        <a href="#recruitment" className="hover:text-blue-500">Recruitment</a>
                        <a href="#government" className="hover:text-blue-500">Government</a>
                        <a href="#portals" className="hover:text-blue-500">Portals</a>
                        <a href="#download-cards" className="hover:text-blue-500">Download Cards</a>

                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[10px]">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730033633/Other%20data/ixbuke4pljlsqb2v15hf.svg" alt="QR Code" className="h-5 mr-2" />
                                Get Ami <br /> Probashi App
                            </button>
                        </div>
                        <div className="flex justify-center mt-4 space-x-2 border p-1 rounded-2xl">
                            <button className="bg-teal-500 text-white px-2 py-1 rounded-full">EN</button>
                            <span>|</span>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full">বা</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

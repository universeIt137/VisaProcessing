import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-[#E1F3EE] pt-10 pb-4 text-gray-800">
            {/* Top Section with Call and Contact Info */}
            <div className="lg:w-10/12 mx-auto mb-8 flex justify-between items-center px-2">
                <div>
                    <div className="lg:text-center md:text-left mb-6 md:mb-3">
                        <h2 className="lg:text-3xl font-semibold">
                            Call now for any need? <span className="text-[#007B67]">Let us know 24/7 in 16768</span>
                        </h2>
                    </div>

                    <div className="lg:flex items-center gap-3">
                        <button className="flex items-center bg-[#007B67] text-white px-4 py-2 rounded-full lg:text-3xl font-semibold">
                            <FaPhoneAlt /> 16768
                        </button>
                        <p className="text-green-700 lg:text-xl hidden lg:block ">Or</p>
                        <div className=" hidden lg:block lg:text-lg font-semibold text-gray-700 border lg:border-2 border-gray-500 lg:px-4 px-1 lg:py-2 rounded-full">
                            09638-016768
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730037206/Other%20data/xhvztt3c9cw24o4mwdus.webp" alt="" />
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="bg-[#F1FAF7] py-8">
                <div className="lg:w-10/12 mx-auto px-6 md:flex justify-between">
                    <div className="flex gap-3">
                        {/* Column 1 */}
                        <div>
                            <h3 className="font-semibold mb-2 lg:text-2xl">Ami Probashi</h3>
                            <ul className="space-y-3 text-gray-600 lg:text-xl">
                                <li>Find Job</li>
                                <li>Make CV</li>
                                <li>Career Consultancy</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h3 className="font-semibold mb-2 lg:text-2xl">Probashi Business</h3>
                            <ul className="space-y-3 text-gray-600 lg:text-xl">
                                <li>Local Recruiting Agency</li>
                                <li>Foreign Employer</li>
                                <li>Training Institute</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-5 mt-4 lg:mt-0">
                        {/* Column 3 */}
                        <div>
                            <h3 className="font-semibold mb-2 lg:text-2xl">Life Style Service</h3>
                            <ul className="space-y-3 text-gray-600 lg:text-xl">
                                <li>Online Doctor</li>
                                <li>Probashi Learning</li>
                                <li>Entertainment</li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="">
                            <h3 className="font-semibold mb-2 lg:text-2xl">Our Company</h3>
                            <ul className="space-y-3 text-gray-600 lg:text-xl">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 5 */}
                    <div className="text-center md:text-left mt-6 md:mt-0">
                        <h3 className="font-semibold mb-2 lg:text-2xl">Connect with us</h3>
                        <div className="flex space-x-3 justify-center md:justify-start mb-4">
                            <div className="w-12 h-12 rounded-lg bg-[#c0d3d0] flex items-center justify-center">
                                {/* LinkedIn Icon */}
                                <FaLinkedin className="text-xl" />
                            </div>

                            <div className="w-12 h-12 rounded-lg bg-[#c0d3d0] flex items-center justify-center">
                                {/* LinkedIn Icon */}
                                <FaFacebookSquare className="text-xl" />
                            </div>

                            <div className="w-12 h-12 rounded-lg bg-[#c0d3d0] flex items-center justify-center">
                                {/* LinkedIn Icon */}
                                <FaInstagram className="text-xl" />
                            </div>

                            <div className="w-12 h-12 rounded-lg bg-[#c0d3d0] flex items-center justify-center">
                                {/* LinkedIn Icon */}
                                <IoLogoYoutube className="text-xl" />
                            </div>

                        </div>

                        {/* App Download Links */}
                        <p className="lg:text-xl font-semibold py-1">Get the Ami Probashi App</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730036768/Other%20data/atql7fb8ckgvvececlnw.svg"
                                alt="Download on the App Store"
                                className="w-28"
                            />
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730036768/Other%20data/wpj32nbf2mabcupqlllt.svg"
                                alt="Get it on Google Play"
                                className="w-28"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section with Copyright */}
            <div className="lg:bg-[#007B67] py-4 text-center lg:text-white text-sm">
                <div className="lg:flex justify-between items-center w-10/12 mx-auto">
                    <p>© Copyright 2024 Ami Probashi. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:underline">Site Map</a>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                        <a href="#" className="hover:underline hidden lg:block">Privacy Policy</a>
                        <a href="#" className="hover:underline">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';

const ClearancePage = () => {
    return (
        <div>
            <div className='w-1/3 mx-auto'>
                {/* <div className=" shadow-lg rounded-xl">


                    <div className=" flex justify-around py-5">
                        <div className="">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729935951/Other%20data/g2ix09qhbjmeyan8m2jw.jpg" alt="" className=' border border-black size-36 mx-auto rounded-lg' />
                        </div>
                        <div className="space-y-1">
                            <div className="">
                                <p className='font-semibold text-[12px]'>Name:</p>
                                <p className='uppercase font-bold text-[14px]'>md shakawat akbar</p>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[12px]'>Passport Number:</p>
                                <p className='uppercase font-bold text-[14px]'>A2234234DFD</p>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[12px]'>Visa Number:</p>
                                <p className='uppercase font-bold text-[14px]'>A2234234DFD</p>
                            </div>

                        </div>
                    </div>






                </div> */}

                <div className=" mx-auto bg-white rounded-lg shadow-md p-10 flex items-center space-x-4">
                    <div>
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729935951/Other%20data/g2ix09qhbjmeyan8m2jw.jpg" // Replace with your image URL
                            alt="Profile"
                            className="w-32 rounded-md border border-gray-300 object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-teal-700">MD SHAWKAT AKBAR</h2>
                        <div className="mt-2 text-xl text-gray-600 space-y-1">
                            <div className="flex justify-between">
                                <span>Passport No</span>
                                <span className="font-semibold text-gray-800">A13378486</span>
                            </div>
                            <div className="flex justify-between">
                                <span>P. Issue Date</span>
                                <span className="font-semibold text-gray-800">2023-12-17</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Date of Birth</span>
                                <span className="font-semibold text-gray-800">1987-05-25</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Visa No.</span>
                                <span className="font-semibold text-gray-800">AL0005721e</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 my-10 border-[#1a7a86] rounded-xl">
                    <div className="bg-gradient-to-r from-[#1a7a86] to-[#7269c5] rounded-t-xl">
                        <div className="flex justify-around items-center   py-4">
                            <div className="">
                                <p className="text-xl text-white">BMET Smart Card</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                        <p className='text-white ml-[30px] lg:ml-[60px] -mt-3 pb-5'>Clearance ID: AL-I-2024-4000100</p>
                    </div>

                    <div className=" flex justify-around  py-10">
                        <div className="">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724761417/LMS/lt7agjgd15ok2ktoquow.png" alt="" className=' border w-2/3 mx-auto rounded-lg' />
                        </div>
                        <div className="mr-[10px] space-y-1">
                            <div className="">
                                <p className='font-semibold text-[12px]'>Name:</p>
                                <p className='uppercase font-bold text-[14px]'>md shakawat akbar</p>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[12px]'>Passport Number:</p>
                                <p className='uppercase font-bold text-[14px]'>A2234234DFD</p>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[12px]'>Visa Number:</p>
                                <p className='uppercase font-bold text-[14px]'>A2234234DFD</p>
                            </div>

                        </div>
                    </div>

                    <div className="border-b-2 border-black flex gap-5 px-4 mx-4 my-2">
                        <div className=" w-1/2">
                            <p className="text-[12px]">Father:</p>
                            <p className='uppercase font-bold text-[12px] lg:text-[14px]'>md shakawat akbar</p>
                        </div>
                        <div className=" w-1/2">
                            <p className='text-[12px]'>Mother:</p>
                            <p className='uppercase font-bold text-[12px] lg:text-[14px]'>md shakawat akbar</p>
                        </div>
                    </div>


                    <div className="border-b-2 border-black flex gap-4 px-4 mx-4 my-2">
                        <div className="w-1/2">
                            <p className='text-[12px]'>BRA ID:</p>
                            <p className='uppercase font-bold text-[12px] lg:text-[14px]'></p>
                        </div>
                        <div className="w-1/2">
                            <p className='text-[12px]'>Employer:</p>
                            <p className='uppercase font-bold text-[10px] lg:text-[12px]'>sumitomono Corporation</p>
                        </div>
                    </div>

                    <div className="border-b-2 border-black flex gap-5 px-4 mx-4 my-2">
                        <div className="w-1/2">
                            <p className='text-[12px]'>Job:</p>
                            <p className='uppercase font-bold text-[12px] lg:text-[14px]'>General Worker</p>
                        </div>
                        <div className="w-1/2">
                            <p className='text-[12px]'>Country:</p>
                            <p className='uppercase font-bold text-[12px] lg:text-[14px]'>Albania</p>
                        </div>
                    </div>

                    <div className="border-b-2 border-black flex gap-5 px-4 mx-4 my-2 mb-10">
                        <div className="w-1/2">
                            <p className='text-[12px]'>Passport Issue Date:</p>
                            <p className='uppercase font-bold text-[12px] lg:text-[14px]'>17 Dec 2024</p>
                        </div>
                        <div className="w-1/2">
                            <p className='text-[12px]'>Clearance Date:</p>
                            <p className='uppercase font-bold text-[12px] lg:text-[14px]'>17 Dec 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClearancePage;
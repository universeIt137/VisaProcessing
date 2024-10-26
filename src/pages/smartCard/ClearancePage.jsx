import React, { useEffect } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { useParams } from 'react-router-dom';

const ClearancePage = () => {
    window.scrollTo(0, 0);
    const {singleManPowerDataApi,singleManPowerData} = manPowerStore();
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            await singleManPowerDataApi(id);
        })()
    },[id])
    return (
        <div>
            <div className='lg:w-[600px] mx-auto px-5'>
                

                <div className=" mx-auto bg-white rounded-lg p-4 lg:flex lg:gap-4 py-5 lg:mt-10 shadow-lg">
                    <div className=' flex justify-center mx-auto'>
                        <img
                            src= { singleManPowerData?.img } // Replace with your image URL
                            alt="Profile"
                            className=" rounded-md border border-black size-28 lg:size-40"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <h2 className=" text-[20px] text-center lg:text-start lg:text-3xl font-semibold text-gray-500">{singleManPowerData?.name}</h2>
                        <div className="mt-2 lg:text-[21px] text-gray-600 space-y-2">
                            <div className="flex justify-between border-b border-dashed border-teal-800 lg:py-1">
                                <span>Passport No</span>
                                <span className="font-semibold text-teal-900"> { singleManPowerData?.passNo } </span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-teal-800 lg:py-1">
                                <span>P. Issue Date</span>
                                <span className="font-semibold text-gray-800"> { singleManPowerData?.pIssueDate } </span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-300 lg:py-1">
                                <span>Date of Birth</span>
                                <span className="font-semibold text-gray-800"> { singleManPowerData?.userBirthDate } </span>
                            </div>
                            <div className="flex justify-between lg:py-1">
                                <span>Visa No.</span>
                                <span className="font-semibold text-gray-800"> { singleManPowerData?.VisaNo } </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 my-10 border-[#1a7a86] rounded-xl shadow-lg">
                    <div className="bg-[#c8d3e5] rounded-t-xl">
                        <div className="flex justify-between items-center p-4">
                            <div className="">
                                <p className="lg:text-2xl text-[#032b87] font-semibold">BMET Smart Card</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Name</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.name }</span>
                            </div>
                            <div className="flex justify-between border-b-2 border-dashed border-blue-900 lg:py-3">
                                <span>Clearance ID</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.BclearanceId } </span>
                            </div>
                            <div className="flex justify-between border-b-2 border-dashed  border-blue-900 lg:py-3">
                                <span>Visa No</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.BvisaNo }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Employer</span>
                                <span className="font-semibold text-gray-500"> { singleManPowerData?.Bemployer } </span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Country</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.Bcountry }</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="border-b-2 my-10 border-[#1a7a86] rounded-xl shadow-lg">
                    <div className="bg-[#CBE6D6] rounded-t-xl">
                        <div className="flex justify-between items-center   p-4">
                            <div className="">
                                <p className="lg:text-2xl text-[#008638] font-semibold">
                                    PDO Certificate</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Name</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.name }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Certificate No</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.pCertificateNo }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Country</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.pdoCountry }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>TTC</span>
                                <span className="font-semibold text-gray-500"> { singleManPowerData?.TTCValue }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Issue Date</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.pIssueDate }</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="border-b-2 my-10 border-[#30a55f] rounded-xl shadow-lg">
                    <div className="bg-[#CBE6D6] rounded-t-xl">
                        <div className="flex justify-between items-center   p-4">
                            <div className="">
                                <p className="lg:text-2xl text-[#00749a] font-semibold">
                                    BMET Registration</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Name</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.name }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>BMET No</span>
                                <span className="font-semibold text-gray-500">{ singleManPowerData?.bmetNo }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Birth Date</span>
                                <span className="font-semibold text-gray-500">{singleManPowerData?.userBirthDate}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Issue Date</span>
                                <span className="font-semibold text-gray-500">{singleManPowerData?.bmetIssueDate}
                                </span>
                            </div>

                        </div>
                    </div>



                </div>

                <div className="border-b-2 my-10 border-[#30a55f] rounded-xl shadow-lg">
                    <div className="bg-[#C1D6CD] rounded-t-xl">
                        <div className="flex justify-between items-center   p-4">
                            <div className="">
                                <p className="lg:text-2xl text-[#3a7a61] font-semibold">

                                    Passport</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Name</span>
                                <span className="font-semibold text-gray-500">{singleManPowerData?.name}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Passport No</span>
                                <span className="font-semibold text-gray-500">{singleManPowerData?.passNo}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Passport Issue Date</span>
                                <span className="font-semibold text-gray-500">{singleManPowerData?.passIssueDate}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3">
                                <span>Passport Expiry Date</span>
                                <span className="font-semibold text-gray-500">{singleManPowerData?.passExpiryDate}

                                </span>
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default ClearancePage;
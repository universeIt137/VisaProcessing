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
            <div className='lg:w-[600px] mx-auto px-6'>
                

                <div className=" mx-auto bg-white rounded-lg p-4 lg:flex lg:gap-4 shadow-2xl">
                    <div className=' flex justify-center mx-auto'>
                        <img
                            src= { singleManPowerData?.img } // Replace with your image URL
                            alt="Profile"
                            className=" rounded-lg lg:rounded-2xl border border-black size-24 lg:w-32 lg:h-36"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <h2 className=" text-[20px] text-center lg:text-start lg:text-[28px] mt-5 font-semibold text-[#157E7D]">{singleManPowerData?.name}</h2>
                        <div className="mt-2 text-[16px] lg:text-[20px] space-y-2">
                            <div className="flex justify-between border-b border-dashed border-teal-800 py-1">
                                <span className='text-[#666687]'>Passport No</span>
                                <span className="font-semibold text-[#4A4A6A]"> { singleManPowerData?.passNo } </span>
                            </div>
                            <div className="flex justify-between border-b border-dashed border-teal-800 py-1">
                                <span className='text-[#666687]'>P. Issue Date</span>
                                <span className="font-semibold text-[#4A4A6A]"> { singleManPowerData?.pIssueDate } </span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-300 py-1">
                                <span className='text-[#666687]'>Date of Birth</span>
                                <span className="font-semibold text-[#4A4A6A]"> { singleManPowerData?.dateOfBirth } </span>
                            </div>
                            <div className="flex justify-between py-1">
                                <span className='text-[#666687]'>Visa No.</span>
                                <span className="font-semibold text-[#4A4A6A]"> { singleManPowerData?.VisaNo } </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 my-10 border-[#1a7a86] rounded-xl shadow-lg">
                    <div className="bg-[#c8d3e5] rounded-t-xl">
                        <div className="flex justify-between items-center p-4">
                            <div className="">
                                <p className=" text-[16px] lg:text-[26px] text-[#032b87] font-semibold">BMET Smart Card</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 text-[14px] lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Name</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.name }</span>
                            </div>
                            <div className="flex justify-between border-b-2 border-dashed border-blue-900 lg:py-3 py-1">
                                <span className='text-[#666687]'>Clearance ID</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.BclearanceId } </span>
                            </div>
                            <div className="flex justify-between border-b-2 border-dashed  border-blue-900 lg:py-3 py-1">
                                <span className='text-[#666687]'>Visa No</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.VisaNo }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Employer</span>
                                <span className="font-semibold text-[#666687]"> { singleManPowerData?.Bemployer } </span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Country</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.Bcountry }</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="border-b-2 my-10 border-[#1a7a86] rounded-xl shadow-lg">
                    <div className="bg-[#CBE6D6] rounded-t-xl">
                        <div className="flex justify-between items-center   p-4">
                            <div className="">
                                <p className="text-[16px] lg:text-[26px] text-[#008638] font-semibold">
                                    PDO Certificate</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 text-[14px] lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Name</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.name }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Certificate No</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.pCertificateNo }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Country</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.Bcountry }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>TTC</span>
                                <span className="font-semibold text-[#666687]"> { singleManPowerData?.TTCValue }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Issue Date</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.pIssueDate }</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="border-b-2 my-10 border-[#30a55f] rounded-xl shadow-lg">
                    <div className="bg-[#CBE6D6] rounded-t-xl">
                        <div className="flex justify-between items-center   p-4">
                            <div className="">
                                <p className="text-[16px] lg:text-[26px] text-[#00749a] font-semibold">
                                    BMET Registration</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 text-[14px] lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Name</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.name }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>BMET No</span>
                                <span className="font-semibold text-[#666687]">{ singleManPowerData?.bmetNo }</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Birth Date</span>
                                <span className="font-semibold text-[#666687]">{singleManPowerData?.dateOfBirth}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Issue Date</span>
                                <span className="font-semibold text-[#666687]">{singleManPowerData?.bmetIssueDate}
                                </span>
                            </div>

                        </div>
                    </div>



                </div>

                <div className="border-b-2 my-10 border-[#30a55f] rounded-xl shadow-lg">
                    <div className="bg-[#C1D6CD] rounded-t-xl">
                        <div className="flex justify-between items-center   p-4">
                            <div className="">
                                <p className="text-[16px] lg:text-[26px] text-[#3a7a61] font-semibold">

                                    Passport</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-2 text-[14px] lg:text-[21px] text-gray-600 space-y-2 p-6 font-semibold">
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Name</span>
                                <span className="font-semibold text-[#666687]">{singleManPowerData?.name}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Passport No</span>
                                <span className="font-semibold text-[#666687]">{singleManPowerData?.passNo}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Passport Issue Date</span>
                                <span className="font-semibold text-[#666687]">{singleManPowerData?.passIssueDate}</span>
                            </div>
                            <div className="flex justify-between border-b  border-gray-200 lg:py-3 py-1">
                                <span className='text-[#666687]'>Passport Expiry Date</span>
                                <span className="font-semibold text-[#666687]">{singleManPowerData?.passExpiryDate}

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
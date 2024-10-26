import React, { useEffect } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { useParams } from 'react-router-dom';

const BMETcard = () => {
    const {singleManPowerDataApi,singleManPowerData} = manPowerStore();
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            await singleManPowerDataApi(id);
        })()
    },[id])
    return (
        <div className='mx-auto lg:w-1/3 lg:mt-14'>
            <div className="border border-[#1a7a86] rounded-xl">
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
                    <p className='text-white ml-[30px] lg:ml-[60px] -mt-3 pb-5'>Clearance ID: ${singleManPowerData?.BclearanceId} </p>
                </div>

                <div className=" flex justify-around  py-10">
                    <div className="">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724761417/LMS/lt7agjgd15ok2ktoquow.png" alt="" className=' border w-2/3 mx-auto rounded-lg' />
                    </div>
                    <div className="mr-[10px] space-y-1">
                        <div className="">
                            <p className='font-semibold text-[12px]'>Name:</p>
                            <p className='uppercase font-bold text-[14px]'>{singleManPowerData?.name}</p>
                        </div>
                        <div className="">
                            <p className='font-semibold text-[12px]'>Passport Number:</p>
                            <p className='uppercase font-bold text-[14px]'>A2234234DFD</p>
                        </div>
                        <div className="">
                            <p className='font-semibold text-[12px]'>Visa Number:</p>
                            <p className='uppercase font-bold text-[14px]'>{singleManPowerData?.VisaNo}</p>
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
            <div className="w-1/2 mx-auto mt-6">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729933701/Other%20data/atoeymfg1vqiwg34x2oh.png" alt="" />
            </div>
        </div>
    );
};

export default BMETcard;
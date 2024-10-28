import React, { useEffect } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { useParams } from 'react-router-dom';

const BmetDownloadInformation = () => {
    const { singleManPowerDataApi, singleManPowerData } = manPowerStore();
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            await singleManPowerDataApi(id);
        })()
    }, [id])

    const handlePrint = () => {
        window.print(); // This triggers the browser's print dialog
    };
    return (

        <div className="" id="pdf-content">

            <div className='mx-auto lg:w-[500px] lg:mt-14 border mb-20 rounded-xl'>
                <div className="border-2 border-[#5FAE82] rounded-xl card-head">
                    <div

                        className="rounded-t-xl bg-gradient-to-r from-[#177b83] to-[#7765ca] "
                    >
                        <div className="flex justify-around items-center py-10">
                            <div>
                                <p className="text-2xl font-bold text-white">BMET Registration No</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className="w-10" />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className="w-10" />
                            </div>
                        </div>
                        <p className="text-white lg:text-2xl ml-[30px] lg:ml-[38px] -mt-9 pb-5">
                            BMET No :
                        </p>
                    </div>

                    {/* name phone */}
                    <div className='lg:px-8  font-sans bg-white ' >
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Name:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Phone:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Passport Number:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Birth Date:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Father:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Mother:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Gender:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>NID:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Height:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Weight:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Nationality:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Religion:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>

                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Para/Area/Village:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Thana/Upazila:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>

                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">District:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Division:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>

                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Interested Skill:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 
                                    <span>Cleaner, Driver, Hotel Boy, Labour, Salesman,
                                    Businessman</span>
                                </p>
                            </div>
                            <div className=" -ml-7">
                                <p className='text-[16px]'>Interested Countries:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Albania, Saudi Arabia, Italy </p>
                            </div>
                        </div>

                    </div>


                </div>




                
                
            </div>
        </div>
    );
};

export default BmetDownloadInformation;
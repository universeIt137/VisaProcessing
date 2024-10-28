import React, { useEffect } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { useParams } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CiZoomIn, CiZoomOut } from 'react-icons/ci';
import { HiOutlineZoomIn } from 'react-icons/hi';
import { MdOutlineZoomOut, MdOutlineZoomOutMap } from 'react-icons/md';
import { ImZoomIn, ImZoomOut } from 'react-icons/im';

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

        <div className='lg:px-28 lg:py-10  ' >
            <div className='flex justify-between border border-black items-center bg-[#eeeeee] py-4 ' >
                    <div className="search">
                        <div className='flex items-center text-xl text-[#B1B1B1] gap-10 ' >
                            <span className=' ' > <IoIosSearch /> </span>
                            <span className='' ><FaAngleUp /></span>
                            <span className='' ><FaAngleDown /></span>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className=" flex gap-10 text-black items-center text-xl ">
                        <span>  <ImZoomOut /> </span>
                        <span> <ImZoomIn /></span>
                    </div>
                    <div className="flex items-center ">
                        
                        <button className='' ><img className='w-6' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730101021/gfnxeurpjs0lvvg1hmrr.png" alt="" /></button>
                        <button>
                            <img className='w-6' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730103129/uneqmilz9rnhqdbfbpe6.webp" alt="" />
                        </button>
                    </div>
            </div>
            <div className=" h-screen   overflow-auto bg-white " id="pdf-content">
            
            <div className='border-2' >
                
            <div className='mx-auto lg:w-[500px] lg:mt-14 border mb-20 bg-white rounded-xl shadow-xl '>
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
                    <div className='font-sans bg-white ' >
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Name:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
                                <p className='text-[16px]'>Phone:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Passport Number:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
                                <p className='text-[16px]'>Birth Date:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Father:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
                                <p className='text-[16px]'>Mother:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Gender:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
                                <p className='text-[16px]'>NID:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Height:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
                                <p className='text-[16px]'>Weight:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Nationality:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
                                <p className='text-[16px]'>Religion:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>

                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">Para/Area/Village:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
                                <p className='text-[16px]'>Thana/Upazila:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> 01700000000 </p>
                            </div>
                        </div>

                        <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-6  ">
                            <div className="">
                                <p className="text-[16px]">District:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Anhar ahmad</p>
                            </div>
                            <div className=" ">
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
                            <div className="">
                                <p className='text-[16px]'>Interested Countries:</p>
                                <p className='uppercase font-semibold text-[12px] lg:text-[19px]'> Albania, Saudi Arabia, Italy </p>
                            </div>
                        </div>

                    </div>


                </div>
                <div>
                    <img className='w-[250px] block mx-auto my-10 ' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730098177/n4lij6jjsgjld2ey9lan.png" alt="" />
                </div>



                
                
            </div>
            </div>
            </div>
        </div>
    );
};

export default BmetDownloadInformation;
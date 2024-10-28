import React, { useEffect } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { useParams } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CiZoomIn, CiZoomOut } from 'react-icons/ci';
import { HiOutlineZoomIn } from 'react-icons/hi';
import { MdOutlineZoomOut, MdOutlineZoomOutMap } from 'react-icons/md';
import { ImZoomIn, ImZoomOut } from 'react-icons/im';

const BmetDownloadInformation = ({ data = [] }) => {

    const { weight, village, thana, skill, religion, qr_code_probasi, qr_code_img, phone, passNo, passIssueDate, passExpiryDate, pIssueDate, pCertificateNo, nid, nationality, name, img, height, gender, division, district, dateOfBirth, countries, bmetNo, bmetIssueDate, VisaNo, TTC, Mother_Name, Job_Type, Father_Name, Bmet_clearance, Bemployer, Bcountry, BclearanceId } = data;




    const handlePrint = () => {
        window.print(); // This triggers the browser's print dialog
    };
    return (

        <div className='md:px-28 lg:py-10 mx-4 py-5 ' >
            <div className='flex justify-between border border-black items-center px-4 bg-[#eeeeee] py-4 ' >
                <div className='flex items-center text-xl text-[#B1B1B1]  md:gap-10 ' >
                    <span className=' ' > <IoIosSearch /> </span>
                    <span className='' ><FaAngleUp /></span>
                    <span className='' ><FaAngleDown /></span>
                </div>
                <div>

                </div>
                <div className=" flex md:gap-10 ml-4 text-black items-center text-xl ">
                    <span>  <ImZoomOut /> </span>
                    <span> <ImZoomIn /></span>
                </div>
                <div className="flex ml-4 items-center gap-2 md:gap-5 ">

                    <button className='' ><img className='w-8' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730101021/gfnxeurpjs0lvvg1hmrr.png" alt="" /></button>
                    <button>
                        <img className='w-8' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730103129/uneqmilz9rnhqdbfbpe6.webp" alt="" />
                    </button>
                    <button>
                        <img className='w-8' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730103421/mwz4arvsyrlkkcz7nmqs.webp" alt="" />

                    </button>
                    <button>
                        <img className='w-8' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730103575/Other%20data/fnrghebzuo9yffoaxubx.webp" alt="" />
                    </button>
                    <button>
                        <img className='w-8' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730098186/Other%20data/qa9qsq0sngj15fkdfdso.png" alt="" />
                    </button>
                </div>
            </div>
            <div className=" h-screen   overflow-auto bg-white " id="pdf-content">

                <div className='border-2' >

                    <div className='mx-auto md:w-[500px]  md:mt-14 border md:mb-20 bg-white rounded-xl shadow-xl '>
                        <div className="border-2   border-[#5FAE82] rounded-xl card-head">
                            <div

                                className="rounded-t-xl bg-gradient-to-r from-[#5db17f] to-[#709F99] "
                            >
                                <div className="flex justify-around items-center  py-4 md:py-10">
                                    <div>
                                        <p className=" -ml-7 md:text-2xl font-bold text-[10px] text-white">BMET Registration No</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className="lg:w-10 w-6 " />
                                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className="lg:w-10 w-6" />
                                    </div>
                                </div>
                                <p className="text-white text-[10px] md:text-2xl ml-2 md:ml-[30px] lg:ml-[38px] -mt-4 pb-5">
                                    BMET No : {bmetNo}
                                </p>
                            </div>

                            {/* name phone */}
                            <div className='font-sans bg-white ' >
                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 md:my-6 my-2 gap-4  ">
                                    <div className="">
                                        <p className="md:text-[16px]  text-[10px] ">Name:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text[12px] lg:text-[19px]  '> {name} </p>
                                    </div>
                                    <div className=" ">
                                        <p className='md:text-[16px] text-[10px] '>Phone:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {phone} </p>
                                    </div>
                                </div>
                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 my:my-6 my-2 gap-4 ">
                                    <div className="">
                                        <p className="md:text-[16px] text-[10px]">Passport Number:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {passNo}  </p>
                                    </div>
                                    <div className=" ">
                                        <p className='md:text-[16px] text-[10px] '>Birth Date:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {dateOfBirth} </p>
                                    </div>
                                </div>
                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 lg:my-6 my-2 gap-4 ">
                                    <div className="">
                                        <p className="md:text-[16px] text-[10px] ">Father:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {Father_Name}  </p>
                                    </div>
                                    <div className=" ">
                                        <p className=' text-[10px] md:text-[16px]'>Mother:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {Mother_Name} </p>
                                    </div>
                                </div>
                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 lg:my-6 my-2 gap-4 ">
                                    <div className="">
                                        <p className="text-[10px] md:text-[16px]">Gender:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {gender}  </p>
                                    </div>
                                    <div className=" ">
                                        <p className='text-[10px] md:text-[16px]'>NID:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {nid} </p>
                                    </div>
                                </div>
                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 lg:my-6 gap-4  my-2 ">
                                    <div className="">
                                        <p className="text-[10px] md:text-[16px]">Height:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {height}  </p>
                                    </div>
                                    <div className=" ">
                                        <p className='text-[10px] md:text-[16px]'>Weight:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {weight} </p>
                                    </div>
                                </div>
                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 lg:my-6 my-2 gap-4 ">
                                    <div className="">
                                        <p className="text-[10px] md:text-[16px]">Nationality:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {nationality} </p>
                                    </div>
                                    <div className=" ">
                                        <p className='text-[10px] md:text-[16px]'>Religion:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {religion} </p>
                                    </div>
                                </div>

                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 lg:my-6 my-2 gap-4 ">
                                    <div className="">
                                        <p className="text-[10px] md:text-[16px]">Para/Area/Village:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {village} </p>
                                    </div>
                                    <div className=" ">
                                        <p className='text-[10px] md:text-[16px]'>Thana/Upazila:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {thana} </p>
                                    </div>
                                </div>

                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 lg:my-6 my-2 gap-4 ">
                                    <div className="">
                                        <p className="text-[10px] md:text-[16px]">District:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'>  {district} </p>
                                    </div>
                                    <div className=" ">
                                        <p className='text-[10px] md:text-[16px]'>Division:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'> {division} </p>
                                    </div>
                                </div>

                                <div className="border-b-2 border-black grid grid-cols-2 mx-2 lg:my-6  my-2 gap-4  ">
                                    <div className="">
                                        <p className="text-[10px] md:text-[16px]">Interested Skill:</p>
                                        <p className='uppercase font-semibold text-[10px] md:text-[12px] lg:text-[19px]'>
                                            <span>
                                                {skill}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='text-[10px] md:text-[16px]'>Interested Countries:</p>
                                        <p className='uppercase font-semibold text-[10px] lg:text-[19px]'> {countries} </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div>
                            <img className=' w-[100px] lg:w-[250px] block mx-auto my-10 ' src={qr_code_probasi} alt="" />
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default BmetDownloadInformation;
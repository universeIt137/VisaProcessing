import React, { useEffect } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { useParams } from 'react-router-dom';

const BMETcard = () => {
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

            <div className='mx-auto w-[400px] lg:mt-14 border mb-20 rounded-xl'>
                <div className="border border-green-700 rounded-xl card-head">
                    {/* <div className="bg-green-700 rounded-t-xl">
                        <div className="flex justify-around items-center   py-4">
                            <div className="">
                                <p className="text-xl text-white">BMET Smart Card</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className='w-10' />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className='w-10' />
                            </div>
                        </div>
                        <p className='text-white ml-[30px] lg:ml-[60px] -mt-3 pb-5'>Clearance ID: {singleManPowerData?.BclearanceId} </p>
                    </div> */}

                    <div

                        className="rounded-t-xl bg-gradient-to-r from-[#177b83] to-[#7765ca] "
                    >
                        <div className="flex justify-around items-center py-4">
                            <div>
                                <p className="text-xl text-white">BMET Smart Card</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/wqytnw8nhwxghgsl8wrh.png" alt="" className="w-10" />
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729929684/Other%20data/ag8cmhvvvdkmzmlbzhbw.png" alt="" className="w-10" />
                            </div>
                        </div>
                        <p className="text-white ml-[30px] lg:ml-[60px] -mt-3 pb-5">
                            Clearance ID: {singleManPowerData?.BclearanceId}
                        </p>
                    </div>

                    <div className=" flex  justify-center items-center gap-5 px-5 py-10 border-black">
                        <div className="w-1/3  rounded-lg">

                            <img src={singleManPowerData?.img} className='border shadow-lg  lg:w-32 lg:h-32 h-24 w-40 mx-auto rounded-lg -mt-10' />
                        </div>
                        <div className="w-2/3  space-y-1">
                            <div className="">
                                <p className='font-bold text-[14px]'>Name:</p>
                                <p className='uppercase font-extrabold text-[16px]'>{singleManPowerData?.name}</p>
                            </div>
                            <div className="">
                                <p className='font-bold text-[14px]'>Passport Number:  </p>
                                <p className='uppercase font-extrabold text-[16px]'>{singleManPowerData?.passNo}</p>
                            </div>
                            <div className="">
                                <p className='font-bold text-[14px]'>Visa Number:</p>
                                <p className='uppercase font-extrabold text-[16px]'>{singleManPowerData?.VisaNo}</p>
                            </div>

                        </div>
                    </div>

                    <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-2 ">
                        <div className="">
                            <p className="text-[13px] font-bold">Father:</p>
                            <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'> {singleManPowerData?.Father_Name} </p>
                        </div>
                        <div className=" -ml-7">
                            <p className='text-[13px] font-bold'>Mother:</p>
                            <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'>{singleManPowerData?.Mother_Name}</p>
                        </div>
                    </div>

                    <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-2 ">
                        <div className=" ">
                            <p className="text-[13px] font-bold">BRA ID:</p>
                            {/* <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'> {singleManPowerData?.Father_Name} </p> */}
                        </div>
                        <div className=" -ml-7">
                            <p className='text-[13px] font-bold'>Employer:</p>
                            <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'>{singleManPowerData?.Bemployer}</p>
                        </div>
                    </div>

                    <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-2 ">
                        <div className=" ">
                            <p className="text-[13px] font-bold">Job:</p>
                            <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'> {singleManPowerData?.Job_Type} </p>
                        </div>
                        <div className=" -ml-7">
                            <p className='text-[13px] font-bold'>Country:</p>
                            <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'>{singleManPowerData?.Bcountry}</p>
                        </div>
                    </div>

                    <div className="border-b-2 border-black grid grid-cols-2 mx-2 my-2 ">
                        <div className=" ">
                            <p className="text-[13px] font-bold">Passport Issue Date:</p>
                            <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'> {singleManPowerData?.pIssueDate} </p>
                        </div>
                        <div className=" -ml-7">
                            <p className='text-[13px] font-bold'>Clearance Date:</p>
                            <p className='uppercase font-extrabold text-[12px] lg:text-[14px]'>{singleManPowerData?.Bmet_clearance}</p>
                        </div>
                    </div>


                </div>
                <div className="w-1/2 mx-auto mt-6">
                    <img src={singleManPowerData?.qr_code_img} alt="" />
                </div>
                <div className="text-center text-green-700">
                    <p className='font-bold '>Verify this card</p>
                    <p className='text-[12px]'>{`Ami Probashi App >> Click 'verify documents'>> Scan QR code`}</p>
                    <p className='text-[12px]'>{`www.amiprobashi.com -> Click 'verify BMET smart card' -> Enter`}</p>
                    <p className='text-[12px]'>{`passport no. -> Search & Verify your card.`}</p>
                    <p className='text-[12px] mt-5 mb-5'>{`This card holder is under insurance coverage & welfare services.`}</p>

                    
                </div>


            </div>
        </div>
    );
};

export default BMETcard;
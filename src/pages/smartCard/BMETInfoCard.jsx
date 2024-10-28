import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const BMETInfoCard = () => {

    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { data: data = {} } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/man-power/${id}`);
            return res.data;
        }
    })

    // console.log(allData);
    // const data = allData.find(record => record.passNo === "A-98798SDFSDF");
    console.log(data);


    return (
        <div className="bg-[#eff3f3] h-screen  my-20 lg:mx-10 mx-2 rounded-2xl flex justify-center">
            <div className="">
                <div className='top-10 right-10 absolute'>
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730098186/Other%20data/qa9qsq0sngj15fkdfdso.png" alt="" />
                </div>
            </div>


            <div className="rounded-2xl lg:w-[580px] mt-14  mx-2">
                <h2 className="text-center text-[24px] lg:text-[28px] font-semibold mb-6">BMET Information</h2>

                <div className="shadow-lg rounded-lg">

                    <div className="bg-gradient-to-r from-[#2E7270] to-[#4d6980] text-white p-7 rounded-t-2xl flex gap-10 justify-between">
                        <div>
                            <h3 className="text-[16px] lg:text-[20px] font-extrabold font-poppins">{ data?.name }</h3>
                            <p className="text-[16px] lg:text-[16px] ">BMET No:  { data?.bmetNo }</p>
                        </div>
                        <div className=" bg-white p-2 rounded-md">
                            <img src={data?.qr_code_probasi} alt="QR Code" className="w-full h-full" />
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-b-lg w-10/12 pb-20">
                        
                        <div className="flex justify-between py-1 ">
                            <div className=" w-1/2 ">
                            <p className="text-black font-extrabold text-[13px] lg:text-[16px]">Name</p>
                            </div>
                            <div className=" w-1/2  text-left">
                            <p className="text-gray-900 text-[14px] lg:text-[16px]">{ data?.name }</p>
                            </div>
                        </div>

                        <div className="flex justify-between py-1 ">
                            <div className=" w-1/2 ">
                            <p className="text-black font-extrabold text-[13px] lg:text-[16px]">Father's name</p>
                            </div>
                            <div className=" w-1/2  text-left">
                            <p className="text-gray-900 text-[14px] lg:text-[16px]">{ data?.Father_Name }</p>
                            </div>
                        </div>

                        <div className="flex justify-between py-1 ">
                            <div className=" w-1/2 ">
                            <p className="text-black font-extrabold text-[13px] lg:text-[16px]">Mother's name</p>
                            </div>
                            <div className=" w-1/2  text-left">
                            <p className="text-gray-900 text-[14px] lg:text-[16px]">{ data?.Mother_Name }</p>
                            </div>
                        </div>
                        <div className="flex justify-between py-1 ">
                            <div className=" w-1/2 ">
                            <p className="text-black font-extrabold text-[13px] lg:text-[16px]">Passport No</p>
                            </div>
                            <div className=" w-1/2  text-left">
                            <p className="text-gray-900 text-[14px] lg:text-[16px]">{ data?.passNo }</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMETInfoCard;

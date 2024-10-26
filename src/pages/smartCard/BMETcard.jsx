import React from 'react';

const BMETcard = () => {
    return (
        <div className='mx-auto w-96 mt-14'>
            <div className="card  w-96  border border-[#1a7a86]">
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
                    <p className='text-white ml-[36px] -mt-3 mb-3'>Clearance ID: AL-I-2024-4000100</p>
                </div>

                <div className="card-body">
                    <div className="">
                        <div className="">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724761417/LMS/lt7agjgd15ok2ktoquow.png" alt="" />
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMETcard;
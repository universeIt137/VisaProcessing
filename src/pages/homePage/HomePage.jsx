import React from 'react';
import { FaCcVisa } from 'react-icons/fa';
import { IoMan } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-screen  w-96 mx-auto '>
                <div className="card bg-red-600 text-white w-96 shadow-xl mt-20">

                    <div className="card-body items-center text-center">

                        <div className="">
                            <Link to={`/visa-processing`}><button className="btn "><FaCcVisa size={20} />Visa Processing</button></Link>
                        </div>
                        <div className="">
                            <Link to={`/man-power`}><button className="btn w-full"><IoMan size={20} />Man Power</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default HomePage;
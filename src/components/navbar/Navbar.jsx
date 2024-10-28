import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { pathname } = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="navbar bg-red-600 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-red-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='font-bold text-white'>
                                <Link
                                    to="/visa-processing"
                                    className={`${pathname === '/visa-processing' ? 'underline' : ''} text-white`}
                                >
                                    Visa Processing
                                </Link>
                            </li>
                            <li className='font-bold text-white'>
                                <Link
                                    to="/man-power"
                                    className={`${pathname === '/man-power' ? 'underline' : ''} text-white`}
                                >
                                    Man Power
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link to="/" className="btn btn-ghost text-xl">Processing Center</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-white'>
                            <Link
                                to="/visa-processing"
                                className={`${pathname === '/visa-processing' ? 'underline' : ''} text-white`}
                            >
                                Visa Processing
                            </Link>
                        </li>
                        <li className='font-bold text-white'>
                            <Link
                                to="/man-power"
                                className={`${pathname === '/man-power' ? 'underline' : ''} text-white`}
                            >
                                Man Power
                            </Link>
                        </li>
                    </ul>
                </div>

                {
                    user ?
                        <div className="dropdown dropdown-end hidden lg:block">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 border rounded-full text-white flex justify-center items-center">
                                    <p className='mt-1 text-2xl'>A</p>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <div className="font-bold text-[14px] gap-3">
                            <Link
                                to="/login"
                                className={`${pathname === '/visa-processing' ? 'underline' : ''} text-white`}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className={`${pathname === '/man-power' ? 'underline' : ''} text-white`}
                            >
                                Register
                            </Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;

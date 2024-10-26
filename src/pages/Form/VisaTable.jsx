import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const VisaTable = ({ nominees = [], refetch }) => {
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = (visa) => {
        alert(`Update function called for ${visa.name} ${visa.surname}`);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                setIsLoading(true);
                axiosPublic
                    .delete(`/nominee/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Nominee data has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                        setIsLoading(false);
                    });
            }
        });
    };

    return (
        <div className="w-full mx-auto px-2"> {/* Reduced padding */}
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">Visa Management Table</h1>
            <div className="w-full overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300 text-xs sm:text-sm md:text-base">
                    <thead>
                        <tr className="bg-gray-100 text-sm md:text-base">
                            <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">Name</th>
                            <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">From</th>
                            <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">Until</th>
                            <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">Surname</th>
                            <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">Passport Number</th>
                            <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">Visa Type</th>
                            <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    <span className="text-lg text-gray-600">Loading...</span>
                                </td>
                            </tr>
                        ) : Array.isArray(nominees) && nominees.length > 0 ? (
                            nominees.map((visa) => (
                                <tr key={visa._id} className="text-center text-xs sm:text-sm md:text-base">
                                    <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">{visa.name}</td>
                                    <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">{visa.from}</td>
                                    <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">{visa.until}</td>
                                    <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">{visa.serName}</td>
                                    <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">{visa.passportNo}</td>
                                    <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">{visa.visaType}</td>
                                    <td className="border px-2 py-1 sm:px-4 sm:py-2 flex justify-center gap-2">
                                        <Link to={`/form-Details/${visa._id}`}>
                                            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs sm:text-sm md:text-base">
                                                View
                                            </button>
                                        </Link>
                                        <Link to={`/nominee-update/${visa._id}`}>
                                            <button className="bg-yellow-500 text-white px-2 py-1 rounded text-xs sm:text-sm md:text-base">
                                                Update
                                            </button>
                                        </Link>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded text-xs sm:text-sm md:text-base"
                                            onClick={() => handleDelete(visa._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center text-gray-600">
                                    No nominees found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VisaTable;

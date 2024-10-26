import React, { useEffect } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { Link } from 'react-router-dom';
import { deleteAlert } from '../../helper/deleteAlert';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const ManPowerTable = () => {
  const { manpowerGetAllData, manpowerGetAllDataApi, deleteManPowerApi } = manPowerStore();

  useEffect(() => {
    (async () => {
        await manpowerGetAllDataApi();
    })();
  }, []);

  const manPowerDelete = async (id) => {
    let resp = await deleteAlert();
    if (resp.isConfirmed) {
        let res = await deleteManPowerApi(id);
        if (res) {
            await manpowerGetAllDataApi();
            toast.success("Deleted successfully");
        } else {
            toast.error("Failed to delete");
        }
    }
}

  return (
    <div className="container mx-auto mt-6">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-700 text-center">
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Image</th>
            <th className="py-3 px-4 border-b">Passport No</th>
            <th className="py-3 px-4 border-b">Visa No</th>
            <th className="py-3 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {manpowerGetAllData &&
            manpowerGetAllData.map((item, i) => (
              <tr key={i} className="hover:bg-gray-100 text-center">
                <td className="py-3 px-4 border-b">{item?.name}</td>
                <td className="py-3 px-4 border-b">
                  <img
                    src={item?.img || 'https://via.placeholder.com/50'}
                    alt={item?.name || 'Placeholder'}
                    className="rounded-full w-12"
                  />
                </td>
                <td className="py-3 px-4 border-b">{item?.passNo}</td>
                <td className="py-3 px-4 border-b">{item?.VisaNo}</td>
                <td className="py-3 px-4 border-b space-x-2">
                  <Link
                    to={`/bmet-card`}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                  >
                    BMET Card
                  </Link>
                  <Link
                    to={`/bmet-clearance`}
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                  >
                    BMET Clearance Details
                  </Link>
                  <Link
                    to={`/man-power/update/${item?._id}`}
                    className="bg-yellow-600 text-white px-3 py-1 rounded-md hover:bg-yellow-700"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => manPowerDelete(item?._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Toaster position="top-center" />
    </div>
  );
};

export default ManPowerTable;

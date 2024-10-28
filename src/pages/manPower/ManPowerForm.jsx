import React, { useState } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { uploadImage } from './../../uploadImg/UploadImage';
import Swal from 'sweetalert2';

const ManPowerForm = () => {
  const [loader, setLoader] = useState(false);
  const { manpowerCreateApi, manpowerGetAllDataApi } = manPowerStore()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.userName.value;
    const img = e.target.img.files[0];
    const dateOfBirth = e.target.dateOfBirth.value;
    const VisaNo = e.target.VisaNo.value;
    const BclearanceId = e.target.BclearanceId.value;
    const Bemployer = e.target.Bemployer.value;
    const Bcountry = e.target.Bcountry.value;
    const pCertificateNo = e.target.pCertificateNo.value;
    const TTC = e.target.TTCValue.value;
    const pIssueDate = e.target.pIssueDate.value;
    const bmetNo = e.target.bmetNo.value;
    const bmetIssueDate = e.target.bmetIssueDate.value;
    const passNo = e.target.passNo.value;
    const passIssueDate = e.target.passIssueDate.value;
    const passExpiryDate = e.target.passExpiryDate.value;
    const Mother_Name = e.target.Mother_Name.value;
    const Father_Name = e.target.Father_Name.value;
    const Job_Type = e.target.job_type.value;
    const Bmet_clearance = e.target.Bmet_clearance.value;

    let project_imgUrl = '';
    if (img?.name) project_imgUrl = await uploadImage(img);

    const payload = {
      name,
      img: project_imgUrl,
      dateOfBirth,
      VisaNo,
      
      BclearanceId,
      Bemployer,
      Bcountry,
      pCertificateNo,
      TTC,
      pIssueDate,
      
      bmetNo,
      bmetIssueDate,
      
      passNo,
      passIssueDate,
      passExpiryDate,
      Father_Name,
      Mother_Name,
      Job_Type,
      Bmet_clearance
    };


    setLoader(true);
    let res = await manpowerCreateApi(payload);
    setLoader(false);
    if (res) {
      await manpowerGetAllDataApi()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Data Submitted",
        showConfirmButton: false,
        timer: 1500
      });
      e.target.reset();
    } else {
      alert("Failed to Add Nominee Data");
    }

  }
  return (
    <div className="flex items-center justify-center min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
          Upload Manpower related data
        </h2>

        <form onSubmit={handleSubmit} >

          <p className="text-lg font-semibold mb-4">Personal Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border p-2 rounded-lg">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name='userName'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
            </div>

            {/* Img */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img">
                Img
              </label>
              <input
                type="file"
                id="img"
                name='img'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            

            {/* Date Of Birth */}
            <div   >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date_Of_Birth">
                Date Of Birth
              </label>
              <input
                type="date"
                id="Date_Of_Birth"
                name='dateOfBirth'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Visa No */}
            <div  >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Visa_No">
                Visa No
              </label>
              <input
                type="text"
                id="Visa_No"
                name='VisaNo'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Visa Number"
              />
            </div>

            {/* Father name  */}
            <div  >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="father-name">
                Father Name
              </label>
              <input
                type="text"
                id="father-name"
                name='Father_Name'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Father Name"
              />
            </div>

            {/* Mother name  */}
            <div  >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="father-name">
                Mother Name
              </label>
              <input
                type="text"
                id="mother-name"
                name='Mother_Name'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Mother Name"
              />
            </div>

            {/* Job Type  */}
            <div  >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="father-name">
                Job Type
              </label>
              <input
                type="text"
                id="job-type"
                name='job_type'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Job Type"
              />
            </div>

          </div>


          <p className="text-lg font-semibold my-5 ">BMET Smart Card Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border p-2 rounded-lg ">


            {/* Clearance ID */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clearanceId">
                Clearance ID
              </label>
              <input
                type="text"
                id="clearanceId"
                name='BclearanceId'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Clearance ID"
              />
            </div>

            

            

            {/* Employer */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employer">
                Employer
              </label>
              <input
                type="text"
                id="employer"
                name='Bemployer'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Job Title"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name='Bcountry'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Country"
              />
            </div>

            {/* Clearance Date */}
            <div   >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date_Of_Birth">
                BMET Smart Card Clearance Date
              </label>
              <input
                type="date"
                id="Bmet_clearance"
                name='Bmet_clearance'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* PDO Certificate Information */}
          <p className="text-lg font-semibold mb-4 mt-6">PDO Certificate Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border p-2 rounded-lg ">


            {/* Certificate No */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certificateNo">
                Certificate No
              </label>
              <input
                type="text"
                id="certificateNo"
                name='pCertificateNo'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Certificate No"
              />
            </div>

            

            {/* TTC */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TTC">
                TTC Name
              </label>
              <input
                type="text"
                id="TTC"
                name='TTCValue'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter TTC"
              />
            </div>

            {/* Issue Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issueDate">
                Issue Date
              </label>
              <input
                type="date"
                id="issueDate"
                name='pIssueDate'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* BMET Registration Information */}
          <p className="text-lg font-semibold mb-4 mt-6">BMET Registration Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border p-2 rounded-lg ">


            {/* BMET No */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bmetNo">
                BMET No
              </label>
              <input
                type="text"
                id="bmetNo"
                name='bmetNo'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter BMET No"
              />
            </div>

            
            {/* Issue Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bmetIssueDate">
                BMET Issue Date
              </label>
              <input
                type="date"
                id="bmetIssueDate"
                name='bmetIssueDate'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Passport Information */}

          <p className="text-lg font-semibold mb-4 mt-6">Passport Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border p-2 rounded-lg ">
            

            {/* Passport No */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passport-no">
                Passport No
              </label>
              <input
                type="text"
                id="passport-no"
                name='passNo'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Passport Number"
              />
            </div>

            {/*  passIssueDate */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Passport_Issue_Date">
                Passport Issue Date
              </label>
              <input
                type="date"
                id="Passport_Issue_Date"
                name='passIssueDate'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Passport Expiry Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Passport_Expiry_Date">
                Passport Expiry Date
              </label>
              <input
                type="date"
                id="Passport_Expiry_Date"
                name='passExpiryDate'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto mt-8">
            <button
              type="submit"
              disabled={loader} // Disable the button during submission
              className={`w-full bg-red-600 text-white py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out ${loader ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {loader ? 'Updating...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManPowerForm;

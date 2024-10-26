import React, { useState } from 'react';
import manPowerStore from '../../api-request/manPowerApi';
import { uploadImage } from './../../uploadImg/UploadImage';
import Swal from 'sweetalert2';

const ManPowerForm = () => {
  const [loader, setLoader] = useState(false);
  const { manpowerCreateApi } = manPowerStore()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const img = e.target.img.files[0];
    const Passport_Issue_Date = e.target.Passport_Issue_Date.value;
    const dateOfBirth = e.target.dateOfBirth.value;
    const VisaNo = e.target.VisaNo.value;
    const Bname = e.target.Bname.value;
    const BclearanceId = e.target.BclearanceId.value;
    const BvisaNo = e.target.BvisaNo.value;
    const Bemployer = e.target.Bemployer.value;
    const Bcountry = e.target.Bcountry.value;
    const pdoName = e.target.pdoName.value;
    const pCertificateNo = e.target.pCertificateNo.value;
    const pdoCountry = e.target.pdoCountry.value;
    const TTC = e.target.TTC.value;
    const pIssueDate = e.target.pIssueDate.value;
    const bmetName = e.target.bmetName.value;
    const bmetNo = e.target.bmetNo.value;
    const BbirthDate = e.target.BbirthDate.value;
    const bmetIssueDate = e.target.bmetIssueDate.value;
    const passName = e.target.passName.value;
    const passNo = e.target.passNo.value;
    const passIssueDate = e.target.passIssueDate.value;
    const passExpiryDate = e.target.passExpiryDate.value;

    let project_imgUrl = '';
    if (img?.name) project_imgUrl = await uploadImage(img);

    const payload = {
      name,
      img: project_imgUrl,
      Passport_Issue_Date,
      dateOfBirth,
      VisaNo,
      Bname,
      BclearanceId,
      BvisaNo,
      Bemployer,
      Bcountry,
      pdoName,
      pCertificateNo,
      pdoCountry,
      TTC,
      pIssueDate,
      bmetName,
      bmetNo,
      BbirthDate,
      bmetIssueDate,
      passName,
      passNo,
      passIssueDate,
      passExpiryDate,
    };

    setLoader(true);
    let res = await manpowerCreateApi(payload);
    setLoader(false);
    if (res) {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
          Upload Nominee Data
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
                name='name'
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

            {/* Passport Issue Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Passport_No">
                Passport Issue Date
              </label>
              <input
                type="date"
                id="Passport_Issue_Date"
                name='Passport_Issue_Date'
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
          </div>


          <p className="text-lg font-semibold my-5 ">BMET Smart Card Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name='Bname'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
            </div>

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

            {/* Visa No */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visaNo">
                Visa No
              </label>
              <input
                type="text"
                id="visaNo"
                name='BvisaNo'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Visa Number"
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
                placeholder="Enter Employer Name"
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
          </div>

          {/* PDO Certificate Information */}
          <p className="text-lg font-semibold mb-4 mt-6">PDO Certificate Information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdoName">
                Name
              </label>
              <input
                type="text"
                id="pdoName"
                name='pdoName'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
            </div>

            {/* Certificate No */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certificateNo">
                Certificate No
              </label>
              <input
                type="number"
                id="certificateNo"
                name='pCertificateNo'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Certificate No"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdoCountry">
                Country
              </label>
              <input
                type="text"
                id="pdoCountry"
                name='pdoCountry'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Country"
              />
            </div>

            {/* TTC */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TTC">
                TTC
              </label>
              <input
                type="text"
                id="TTC"
                name='TTC'
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bmetName">
                Name
              </label>
              <input
                type="text"
                id="bmetName"
                name='bmetName'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
            </div>

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

            {/* Birth Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                name='BbirthDate'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Issue Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bmetIssueDate">
                Issue Date
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passName">
                Name
              </label>
              <input
                type="text"
                id="passName"
                name='passName'
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
            </div>

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
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManPowerForm;

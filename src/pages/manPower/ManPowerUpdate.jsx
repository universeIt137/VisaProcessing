import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import manPowerStore from '../../api-request/manPowerApi';
import { uploadImage } from '../../uploadImg/UploadImage';
import { updateAlert } from '../../helper/updateAlert';
import toast from 'react-hot-toast';
import { SiNginxproxymanager } from 'react-icons/si';
import Swal from 'sweetalert2';

const ManPowerUpdate = () => {
  window.scrollTo(0, 0);
  const [loader, setLoader] = useState(false);
  const { singleManPowerDataApi, singleManPowerData, manpowerUpdateApi, manpowerGetAllDataApi } = manPowerStore();

  const { img: incomingImg } = singleManPowerData;
  const { qr_code_img: incomingQRImg } = singleManPowerData;

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await singleManPowerDataApi(id);
    })()
  }, []);

  // console.log(singleManPowerData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.files[0];
    const dateOfBirth = e.target.dateOfBirth.value;
    const VisaNo = e.target.VisaNo.value;
    const BclearanceId = e.target.BclearanceId.value;
    const Bemployer = e.target.Bemployer.value;
    const Bcountry = e.target.Bcountry.value;
    const pCertificateNo = e.target.pCertificateNo.value;
    const TTC = e.target.TTC.value;
    const pIssueDate = e.target.pIssueDate.value;
    const bmetNo = e.target.bmetNo.value;
    const bmetIssueDate = e.target.bmetIssueDate.value;
    const passNo = e.target.passNo.value;
    const passIssueDate = e.target.passIssueDate.value;
    const passExpiryDate = e.target.passExpiryDate.value;
    const qr_code = e.target.qr_code_img.files[0];
    const Father_Name = e.target.Father_Name.value;
    const Mother_Name = e.target.Mother_Name.value;
    const Job_Type = e.target.job_type.value;
    const Bmet_clearance = e.target.Bmet_clearance.value;



    let imgUrl = incomingImg;

    if (!img?.name) {
      imgUrl = incomingImg
    } else {
      imgUrl = await uploadImage(img);
    }

    let qrImgUrl = incomingQRImg;
    if (!qr_code?.name) {
      qrImgUrl = incomingQRImg;
    } else {
      qrImgUrl = await uploadImage(qr_code);
    }




    const payload = {
      name,
      img: imgUrl,
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
      qr_code_img: qrImgUrl,
      Father_Name,
      Mother_Name,
      Job_Type,
      Bmet_clearance
    };

    console.log(payload);

    const resp = await updateAlert();

    if (resp.isConfirmed) {
      setLoader(true);
      let res = await manpowerUpdateApi(id, payload);
      setLoader(false);

      if (res) {
        await manpowerGetAllDataApi();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data has been updated",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        toast.error("Failed to update")
      }

    }



  }
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
            Update Nominee's Man Power Data
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
                  defaultValue={singleManPowerData?.name}
                  key={Date.now()}
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
                <div className="avatar">
                  <p>Already Uploaded Image</p>
                  <div className="w-12 mt-2 border rounded-2xl">
                    <img src={singleManPowerData?.img} />
                  </div>
                </div>
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
                  defaultValue={singleManPowerData?.dateOfBirth}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.VisaNo}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.Father_Name}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.Mother_Name}
                  key={Date.now()}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

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
                  defaultValue={singleManPowerData?.Job_Type}
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
                  defaultValue={singleManPowerData?.BclearanceId}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.Bemployer}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.Bcountry}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.Bmet_clearance}
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
                  defaultValue={singleManPowerData?.pCertificateNo}
                  key={Date.now()}
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
                  name='TTC'
                  defaultValue={singleManPowerData?.TTC}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.pIssueDate}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.bmetNo}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.bmetIssueDate}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.passNo}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.passIssueDate}
                  key={Date.now()}
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
                  defaultValue={singleManPowerData?.passExpiryDate}
                  key={Date.now()}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* upload qr img */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qr-code-img">
                  Upload QR Code Image
                </label>
                <input
                  type="file"
                  id="qr-code-img"
                  name='qr_code_img'
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="avatar">
                  <p>Already Uploaded Image</p>
                  <div className="w-12 border rounded-2xl">
                    <img src={singleManPowerData?.qr_code_img} />
                  </div>
                </div>
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
                {loader ? 'Updating...' : 'Update'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ManPowerUpdate

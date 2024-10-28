import React, { useEffect, useState } from "react";
import BmetDownloadInformation from "./BmetDownloadInformation";
import manPowerStore from "../../api-request/manPowerApi";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BMETRegistration = () => {


  const axiosPublic = useAxiosPublic();
  const [passNo, setPassNo] = useState('');
  const [show, setShow] = useState(false);

  const [enable, setEnable] = useState(true);

  const captchaValue = [
    "B4Q1", "M6Z7", "X3L9", "K2V5", "N8W0",
    "F1T6", "G9D2", "R4Y8", "J3H7", "P0S5"
  ]
  const [captcha, setCaptcha] = useState("");

  const handleInputChange = (e) => {
    setCaptcha(e.target.value);
  };
  console.log(captcha);
  const exists = captchaValue.includes(captcha);

  console.log(exists);


  const { data: allData = [] } = useQuery({
    queryKey: ['allData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/man-power');
      return res.data;
    }
  })




  const getPassportValue = async (e) => {
    e.preventDefault();
    let passportNumber = e.target.passportNumber.value;
    const captchaInputValue = e.target.captcha.value;
    setCaptcha(captchaInputValue)

    setPassNo(passportNumber)

  }

  const data = allData.find(record => record.passNo === passNo);






  return (
    <>
      <div className="bg-[#F1FAF7] lg:p-8 flex flex-col-reverse md:flex-row gap-6 px-2 lg:w-10/12 mx-auto">
        {/* Instruction Section */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Instruction</h2>
          <hr className="my-3 border-gray-200" />
          <ul className="space-y-4">
            {[
              "Enter your passport number.",
              "Enter the captcha code to access your BMET registration card.",
              "Click on the 'Search' button",
              "If the payment is not yet completed, make the payment.",
              "After the payment is successful, you can view the card.",
            ].map((instruction, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="grid grid-cols-6 gap-8">
                  <div className="text-green-500 col-span-1">
                    <img
                      src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730035185/Other%20data/wfcqsq16vv8tyhuke4bb.svg"
                      alt=""
                      className="w-6 h-6" // Constant size for the image
                    />
                  </div>
                  <p className="text-gray-700 col-span-5 text-[17px]">{instruction}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>


        {/* BMET Registration Card Section */}
        <div className="lg:flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-[24px] font-semibold text-gray-800">BMET Registration Card</h2>
          <hr className="my-3 border-gray-200" />
          <form onSubmit={getPassportValue} action="">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Passport Number</label>
                <input
                  type="text"
                  placeholder="Enter your passport number"
                  name="passportNumber"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 mx-1"
                />
              </div>
              <div>

                <div className="grid  lg:grid-cols-3 items-center space-x-3">
                  <div className="flex items-center col-span-1 ">
                    <div className=" text-green-700 text-lg p-2 rounded-md font-mono">
                      <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730035557/Other%20data/frzcg30bw6wt69kud0xf.png" alt="" className="" />
                    </div>
                    <div className="">
                      <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730035622/Other%20data/zgjtnkfjaonw3xjesqwl.svg" alt="" className="" />
                    </div>
                  </div>
                  <div className=" col-span-2">
                    <input
                      type="text"
                      placeholder="Enter Captcha Code"
                      value={captcha}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    />
                    <p>Real-time Captcha Value: {captcha} exists?: {exists}</p>
                  </div>

                </div>

              </div>
              <button disabled={true} onClick={() => { setShow(!show) }} className="w-full bg-[#22a177]  text-white py-3 lg:text-xl rounded-lg mt-4">
                Search BMET Registration Card
              </button>
            </div>
          </form>
        </div>

      </div>
      {
        show && (
          <BmetDownloadInformation data={data}></BmetDownloadInformation>
        )
      }
    </>
  );
};

export default BMETRegistration;

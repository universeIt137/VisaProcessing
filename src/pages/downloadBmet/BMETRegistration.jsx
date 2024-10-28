import React from "react";

const BMETRegistration = () => {
  return (
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
        <form action="">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Passport Number</label>
              <input
                type="text"
                placeholder="Enter your passport number"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>

              <div className="lg:flex items-center space-x-3">
                <div className="flex items-center">
                  <div className=" text-green-700 text-lg p-2 rounded-md font-mono">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730035557/Other%20data/frzcg30bw6wt69kud0xf.png" alt="" className="" />
                  </div>
                  <div className="">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730035622/Other%20data/zgjtnkfjaonw3xjesqwl.svg" alt="" className="" />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha Code"
                  className="flex-1 border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
                />

              </div>

            </div>
            <button className="w-full bg-[#a0a1a3]  text-white py-3 lg:text-xl rounded-lg mt-4">
              Search BMET Registration Card
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default BMETRegistration;

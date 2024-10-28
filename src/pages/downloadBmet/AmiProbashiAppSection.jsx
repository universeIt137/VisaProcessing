import React from "react";

const AmiProbashiAppSection = () => {
    return (
        <div className="bg-[#F1FAF7] lg:p-8  rounded-lg flex flex-col md:flex-row justify-between items-center lg:w-10/12 mx-auto gap-10">
            {/* Left Side: App Information */}
            <div className="flex-1 text-center md:text-left mb-8 md:mb-0 border bg-[#e7f2ed]  rounded-2xl">
                <div className="mt-10 mx-10">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center pt-7">Get the Ami Probashi App</h2>
                    <p className="text-gray-800 mt-2 text-xl text-center">
                        To go abroad, do the government processes at home in a short time
                    </p>
                </div>

                {/* App Store & Google Play Buttons */}
                <div className="flex justify-center items-center md:justify-start space-x-4 mt-4  w-1/2 mx-auto">
                    <div className="">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730036768/Other%20data/atql7fb8ckgvvececlnw.svg"
                                alt="Download on the App Store"
                                className="w-36 h-12 object-contain"
                            />
                        </a>
                    </div>
                    <div className="">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730036768/Other%20data/wpj32nbf2mabcupqlllt.svg"
                                alt="Get it on Google Play"
                                className="w-36 h-12 object-contain"
                            />
                        </a>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="mt-6">
                    <img
                        src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730036044/Other%20data/tq7by93yjtcfpkr9vci6.webp"
                        alt="Ami Probashi App"
                        className="mx-auto md:mr-0 lg:w-80 w-52"
                    />
                </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="flex-1 hidden lg:block">
                <img
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730036045/Other%20data/neru93zdt8nwgbcaiokz.webp"
                    alt="People Interaction"
                    className="w-full rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default AmiProbashiAppSection;

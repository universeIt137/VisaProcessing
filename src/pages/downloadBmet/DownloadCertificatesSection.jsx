import React from "react";

const DownloadCertificatesSection = () => {
    const cards = [
        { title: "BMET Reg Card", icon: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730034464/Other%20data/tvt2p4yez5fwiza4cym5.svg" },
        { title: "BMET Smart Card", icon: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730034734/Other%20data/lcnuxiibnoyhwbklcua2.svg" },
        { title: "Verify Smart Card", icon: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730034773/Other%20data/lxiz8ssesddhep48nein.svg" },
        { title: "Track Application", icon: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730034809/Other%20data/ef8bfrg6hhyzw2wpniqu.svg" },
        { title: "All PDO Cards", icon: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730034845/Other%20data/ejq3vwbrghjoujo3bpny.svg" },
        { title: "All Training Certificates", icon: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730034884/Other%20data/hzzm8ua2dgwke4dwmoq9.svg" },
    ];

    return (
        <section className="p-6 lg:w-10/12 mx-auto">
            <div className=" mx-auto ">
                {/* Section Title */}
                <h2 className=" text-xl lg:text-3xl font-semibold text-gray-800">Download Certificate & Cards</h2>
                <p className="text-gray-500 mt-1 text-[16px] lg:text-xl ">
                    BMET Registration, BMET Clearance, PDO Enrollment, PDO Certificate & Training Certificate
                </p>
            </div>

            {/* Cards Section */}
            <div className="lg:grid  grid-cols-6   lg:mt-6  mx-auto hidden">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex items-center lg:p-4  rounded-md hover:bg-gray-50 transition"
                    >
                        {/* Icon (placeholder, replace with actual icon if needed) */}
                        <div className="text-4xl  rounded-full p-3 text-green-600 ">
                            <img src={card.icon} alt="" className=" lg:size-24" />
                        </div>
                        <p className="text-gray-700  font-medium lg:text-[20px]">{card.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DownloadCertificatesSection;

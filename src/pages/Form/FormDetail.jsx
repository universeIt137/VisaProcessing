import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const FormDetail = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { data: nominee = {} } = useQuery({
        queryKey: ['nominee'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/nominee/${id}`);
            return res.data;
        }
    });

    const handlePrint = () => {
        window.print(); // This triggers the browser's print dialog
    };

    let randomNum1 = id.slice(4, 5).toUpperCase();
    let randomNum2 = id.slice(5, 6).toUpperCase();
    let randomNum3 = id.slice(6, 7).toUpperCase();
    let randomNum4 = id.slice(7, 8).toUpperCase();


    return (
        <>
            <div id="pdf-content" className="ml-20">
                <div className="w-[1000px]  border-black border-4 my-20">
                    {/* Header */}
                    <div className="flex justify-between items-center border-black p-2 mb-4">
                        <div className="text-left">
                            <h2 className="font-bold uppercase text-sm">Electronic-Visa Republic of Albania</h2>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729687655/UniverseIT/eaesc7duu18k2r985pct.png"
                                className="size-12"
                                alt="Logo"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-bold">{nominee?.verification}</p>
                        </div>
                    </div>

                    {/* Visa Info */}
                    <div className="flex border-y-4 border-black">
                        <div className="w-1/4 border-r-4 border-black">
                            <img
                                src={nominee?.person_img_url}
                                alt="Visa Holder"
                                className="w-full h-[300px] px-2 object-cover"
                            />
                        </div>
                        <div className="w-3/4 grid grid-cols-3 pl-1">
                            <div className="border-black space-y-5">
                                <div className="flex items-center gap-7">
                                    <p className="font-mono">
                                        E VLEFSHME PER <br />
                                        VALID FOR <br />
                                        VALABLE POUR
                                    </p>
                                    <p className="font-bold mt-12 font-mono">{nominee?.valid}</p>
                                </div>
                                <div className="flex items-center gap-20">
                                    <p className="font-mono">
                                        NGA  <br />
                                        FROM <br />
                                        DU
                                    </p>
                                    <p className="font-mono">{nominee?.from}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="font-mono">
                                        TIPI VIZES  <br />
                                        TYPE OF VISA <br />
                                        TYPE DE VISA
                                    </p>
                                    <p className="font-mono">{nominee?.visaType}</p>
                                </div>
                                <div className="flex items-center gap-20">
                                    <p className="font-mono">
                                        LESHUAR NE  <br />
                                        ISSUED IN <br />
                                        DELIVERE A
                                    </p>
                                    <p className="mt-12 font-mono font-bold">{nominee?.issuedIn}</p>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-8">
                                        <p className="font-mono">ME  <br /> ON <br /> LE</p>
                                        <p className="font-mono">{nominee?.issuedOn}</p>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <p className="font-mono">
                                            MBIEMER, EMER  <br />
                                            SURNAME, NAME <br />
                                            NOM, PRENOM <br />
                                            SHENIME
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-20">
                                        <p className="font-mono">
                                            REMARKS  <br />
                                            REMARQUES
                                        </p>
                                        <p className="font-bold font-mono">NONE</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-black flex flex-col justify-center space-y-20">
                                <div className="flex items-center gap-10">
                                    <p className="font-mono">
                                        NUMRI I HYRJEVE <br />
                                        NUMBER OF ENTRIES <br />
                                        NOMBRE D’ ENTREES
                                    </p>
                                    <p className="font-bold text-xl font-mono">{nominee?.entry}</p>
                                </div>
                                <div className="flex items-center gap-10">
                                    <p className="font-mono">
                                        NUMRI I PASAPORTES <br />
                                        NUMBER OF PASSPORT <br />
                                        NUMERO DE PASSEPORT
                                    </p>
                                </div>
                                <div>
                                    <p className="uppercase font-mono text-end">{nominee?.serName},</p>
                                </div>
                            </div>
                            <div className="border-black">
                                <div className="flex items-center gap-10 mt-14">
                                    <p className="font-mono">DERI <br /> UNTIL <br /> AU</p>
                                    <p className="font-mono">{nominee?.until}</p>
                                </div>
                                <div className="flex items-center gap-4 mt-14">
                                    <p className="font-mono">
                                        AFATI I <br />
                                        QENDRIMIT <br />
                                        DURATION <br />
                                        OF STAY <br />
                                        DUREE DE <br />
                                        SEJOUR
                                    </p>
                                    <p className="font-mono">{nominee?.duration}</p>
                                    <p className="font-mono">DITE <br /> DAYS <br /> JOURS</p>
                                </div>
                                <p className="mt-12 ml-14">{nominee?.passportNo}</p>
                                <p className="mt-8 ml-4">{nominee?.name}</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-black pt-2 text-xl flex">
                        <div className="w-1/4"></div>
                        <div className="w-3/4 font-semibold overflow-hidden">
                            <p className="">{`V<AL<<${nominee?.serName}<<<<<<<${nominee?.name}`}<span className='font-extrabold'>{`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`}</span></p>
                            <p className="">{`AL< <${nominee?.passportNo} <<<BDA53108${randomNum1}<<<<<<M3 2 6 0 ${randomNum2}<<<<<<<<<<<<<<<`}</p>
                            <p className="font-extrabold">{`< 1 ${randomNum3}1 1 6 1 3B G D <<<<<<<<<<<<<<<<<< 1 ${randomNum4}3 6C 54 <<<<<<<<<<<<<`}</p>
                        </div>
                    </div>

                </div>

                {/* QR Code and Additional Info */}
                <div className="w-[1000px]  flex items-center">
                    <div>
                        <img src={nominee?.qrCode_img_url} alt="QR Code" className="w-[100px] h-[100px]" />
                    </div>
                    <div>
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729693205/UniverseIT/zelvltq2gmno6mkyekwy.png"
                            alt="Seal"
                            className="w-[60px] -mt-10 "
                        />
                    </div>
                    <div className="font-semibold text-xs">
                        <p>Vulosur elektronikisht nga Ministria për Evropën dhe Punët e Jashtme</p>
                        <p>Date:2024/10/10 11:15:10 +20’00</p>
                        <p>479660156537646378842033174</p>
                        <p>Digitally sealed by the Ministry of Foreign Affairs</p>
                        <p>Date:2024/10/10 11:15:10 +20’00</p>
                        <p>479660156537646378842033174</p>
                    </div>
                </div>

                {/* Note Section */}
                <div className="w-[700px]  mt-4 mb-20 ">
                    <p className="font-semibold">
                        Shënim: Ky dokument është gjeneruar dhe vulosur me anë të një procedure automatike nga një sistem elektronik (Ministria për Evropën dhe Punët e Jashtme)
                        <br />
                        Note: This document is generated and sealed by an automatic procedure in an electronic system (Ministry for Europe and Foreign Affairs)
                    </p>
                </div>
            </div>


            <div className="bg-blue-600 w-32 mb-32 p-3 mx-auto rounded-lg text-white text-center ">
                <button onClick={handlePrint}>Print Page</button>
            </div>

        </>
    );
};

export default FormDetail;
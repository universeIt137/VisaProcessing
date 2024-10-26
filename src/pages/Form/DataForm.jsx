import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { uploadImage } from '../../uploadImg/UploadImage';

const DataForm = ({ refetch }) => {
    const [name, setName] = useState('');
    const [valid, setValid] = useState('');
    const [from, setFrom] = useState('');
    const [until, setUntil] = useState('');
    const [visaType, setVisaType] = useState('');
    const [entry, setEntry] = useState('');
    const [duration, setDuration] = useState('');
    const [issuedIn, setIssuedIn] = useState('');
    const [issuedOn, setIssuedOn] = useState('');
    const [serName, setSerName] = useState('');
    const [passportNo, setPassportNo] = useState('');
    const [verification, setVerification] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [imageName, setImageName] = useState('');
    const [qrCode, setQrCode] = useState('');

    const axiosPublic = useAxiosPublic();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setImageName(file.name);
    };

    const handleQrCodeUpload = (e) => {
        const file = e.target.files[0];
        if (file) setQrCode(file.name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setIsLoading(true);
        const image = form.image.files[0];
        const qrCode = form.qrCode.files[0];

        let project_imgUrl = '';
        if (image?.name) project_imgUrl = await uploadImage(image);

        let qrCode_imgUrl = '';
        if (qrCode?.name) qrCode_imgUrl = await uploadImage(qrCode);

        const projectData = {
            person_img_url: project_imgUrl,
            qrCode_img_url: qrCode_imgUrl,
            name, valid, from, until, visaType, entry,
            duration, issuedIn, issuedOn, serName, passportNo, verification
        };

        axiosPublic.post('/nominee', projectData)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Data Submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));

        form.reset();
    };

    return (
        <div className="flex items-center justify-center  py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">Upload Nominee Data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center mb-4">
                            <label className="block border-2 border-dashed border-gray-300 w-full h-20 lg:h-52 sm:h-64 flex flex-col justify-center items-center cursor-pointer">
                                <input
                                    type="file"
                                    className="hidden"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                                <span className="text-green-600 text-[10px] sm:text-2xl ">+ Upload Nominee  Image</span>
                                <span className="text-xs hidden lg:flex sm:text-sm text-gray-500">Supported: png, jpg, jpeg, webp</span>
                            </label>
                            {imageName && <span className="text-gray-700 mt-2 text-xs sm:text-sm">Uploaded: {imageName}</span>}
                        </div>
                        <div className="flex flex-col items-center mb-4">
                            <label className="block border-2 border-dashed border-gray-300 w-full h-20 lg:h-52  sm:h-64 flex flex-col justify-center items-center cursor-pointer">
                                <input
                                    type="file"
                                    className="hidden"
                                    name="qrCode"
                                    accept="image/*"
                                    onChange={handleQrCodeUpload}
                                />
                                <span className="text-green-600 text-[10px] sm:text-2xl">+ Upload QR Code</span>
                                <span className="text-xs hidden lg:flex sm:text-sm text-gray-500">Supported: png, jpg, jpeg, webp</span>
                            </label>
                            {qrCode && <span className="text-gray-700 mt-2 text-xs sm:text-sm">Uploaded: {qrCode}</span>}
                        </div>
                    </div>

                    <div className="grid gap-1 lg:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
                        {/** Input fields **/}
                        <InputField label="Nominee's Name" value={name} onChange={setName} placeholder="Enter Name" />
                        <InputField label="Valid For" value={valid} onChange={setValid} placeholder="Enter Country Name" />
                        <InputField label="From" type="date" value={from} onChange={setFrom} />
                        <InputField label="Until" type="date" value={until} onChange={setUntil} />
                        <InputField label="Type of Visa" value={visaType} onChange={setVisaType} placeholder="C, D Type" />
                        <InputField label="Number of Entries" value={entry} onChange={setEntry} placeholder="e.g., 1 person, 2 person" />
                        <InputField label="Duration of Stay" value={duration} onChange={setDuration} placeholder="How many days" />
                        <InputField label="Issued In" value={issuedIn} onChange={setIssuedIn} placeholder="Location where applied" />
                        <InputField label="Issued On" type="date" value={issuedOn} onChange={setIssuedOn} />
                        <InputField label="Surname" value={serName} onChange={setSerName} placeholder="Enter Surname" />
                        <InputField label="Passport Number" value={passportNo} onChange={setPassportNo} placeholder="Enter Passport Number" />
                        <InputField label="Verification Number" value={verification} onChange={setVerification} placeholder="Enter Verification No" />
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto mt-8">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Uploading...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ label, type = 'text', value, onChange, placeholder }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
        />
    </div>
);

export default DataForm;

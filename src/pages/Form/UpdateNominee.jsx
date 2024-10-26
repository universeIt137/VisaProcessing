import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { uploadImage } from '../../uploadImg/UploadImage';

const UpdateNominee = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [imageName, setImageName] = useState('');
    const [qrCode, setqrCode] = useState('');
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: nominee = {} } = useQuery({
        queryKey: ['nominee'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/nominee/${id}`);
            return res.data;
        }
    })

    // console.log(nominee);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageName(file.name); // Set the image file name in state
        }
    };

    const handleQrCodeUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setqrCode(file.name); // Set the image file name in state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setIsLoading(true);
        const image = form.image.files[0];
        const qrCode = form.qrCode.files[0];
        // Upload image to cloudinary
        let person_imgUrl = '';
        if (image?.name) {
            person_imgUrl = await uploadImage(image);
        }

        // Upload image to cloudinary
        let qrCode_imgUrl = '';
        if (qrCode?.name) {
            qrCode_imgUrl = await uploadImage(qrCode);
        }

        const duration = form.duration.value;
        const entry = form.entry.value;
        const from = form.from.value;
        const issuedIn = form.issuedIn.value;
        const name = form.name.value;
        const passportNo = form.passportNo.value;
        const serName = form.serName.value;
        const until = form.until.value;
        const valid = form.valid.value;
        const verification = form.verification.value;
        const visaType = form.visaType.value;

        const data = { person_img_url: person_imgUrl, qrCode_img_url: qrCode_imgUrl, duration, entry, from, issuedIn, name, passportNo, serName, until, valid, verification, visaType };
        console.log(data);
        axiosPublic.put(`/nominee/${id}`, data)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Data Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
        form.reset();
    }
    return (
        <div className="flex items-center justify-center bg-gray-50 m-10 border rounded-lg">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Upload Nominee Data</h2>
                <form onSubmit={handleSubmit}>


                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
                        {/* Image Upload Section */}
                        <div className="flex flex-col items-center mb-4">
                            <label className="block border-2 border-dashed border-gray-300 w-full h-16 lg:h-64 flex flex-col justify-center items-center cursor-pointer">
                                <input
                                    type="file"
                                    className="hidden"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                                <span className="text-green-600 lg:text-2xl">+ Upload Nominee Image</span>
                                <span className="text-sm hidden lg:flex text-gray-500">Supported Format: png, jpg, jpeg, webp</span>
                            </label>

                            {/* Display the uploaded image name if available */}
                            {imageName && <span className="text-gray-700 mt-2 text-sm">Uploaded: {imageName}</span>}
                            <div className="avatar">
                                <p>Already Uploaded Image</p>
                                <div className="w-24 rounded-full">
                                    <img src={nominee.person_img_url} />
                                </div>
                            </div>
                        </div>



                        {/* QR Code Upload Section */}
                        <div className="flex flex-col items-center mb-4">
                            <label className="block border-2 border-dashed border-gray-300 w-full h-16 lg:h-64 flex flex-col justify-center items-center cursor-pointer">
                                <input
                                    type="file"
                                    className="hidden"
                                    name="qrCode"
                                    accept="image/*"
                                    onChange={handleQrCodeUpload}
                                />
                                <span className="text-green-600 lg:text-2xl">+ Upload QR Code</span>
                                <span className="text-sm text-gray-500 hidden lg:flex">Supported Format: png, jpg, jpeg, webp</span>
                            </label>

                            {qrCode && <span className="text-gray-700 mt-2 text-sm">Uploaded: {qrCode}</span>}
                            <div className="avatar">
                                <p>Already Uploaded Image</p>
                                <div className="w-24 rounded-full">
                                    <img src={nominee.qrCode_img_url} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                        {/* Nominee's Name  */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Nominee's Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={nominee?.name}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Name"


                            />
                        </div>
                        {/* Valid  */}
                        <div className="mb-4">
                            <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
                                Valid For
                            </label>
                            <input
                                type="text"
                                name='valid'
                                defaultValue={nominee?.valid}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter the Country Name"

                            />
                        </div>
                        {/* From  */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                From
                            </label>
                            <input
                                type="date"
                                name='from'
                                defaultValue={nominee?.from}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Name"

                            />
                        </div>

                        {/* Untill  */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Until
                            </label>
                            <input
                                type="date"
                                name='until'
                                defaultValue={nominee?.until}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Name"

                            />
                        </div>

                        {/* Visa Type  */}
                        <div className="mb-4">
                            <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
                                Type of Visa
                            </label>
                            <input
                                type="text"
                                name='visaType'
                                defaultValue={nominee?.visaType}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="C, D Type"

                            />
                        </div>

                        {/* Entry  */}
                        <div className="mb-4">
                            <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
                                Number of Entries
                            </label>
                            <input
                                type="text"
                                name='entry'
                                defaultValue={nominee?.entry}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Entry no like (1 person, 2 person)"

                            />
                        </div>

                        {/* Duration of Stay  */}
                        <div className="mb-4">
                            <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
                                Duration of Stay
                            </label>
                            <input
                                type="text"
                                name='duration'
                                defaultValue={nominee?.duration}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="How many Days"

                            />
                        </div>

                        {/* Issued in  */}
                        <div className="mb-4">
                            <label htmlFor="live-link" className="block text-sm font-medium text-gray-700">
                                Issued in
                            </label>
                            <input
                                type="text"
                                name='issuedIn'
                                defaultValue={nominee?.issuedIn}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Location from where applied"

                            />
                        </div>

                        {/* Issued on  */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Issued on(Day When Passport Issued)
                            </label>
                            <input
                                type="date"
                                name='issuedOn'
                                defaultValue={nominee?.issuedOn}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Day When Passport Issued"

                            />
                        </div>

                        {/* Surname */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Surname
                            </label>
                            <input
                                type="text"
                                name='serName'
                                defaultValue={nominee?.serName}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Name"

                            />
                        </div>
                        {/* Number of Passport */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Passport Number
                            </label>
                            <input
                                type="text"
                                name='passportNo'
                                defaultValue={nominee?.passportNo}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Passport Number"

                            />
                        </div>

                        {/* verification no */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Verification Number
                            </label>
                            <input
                                type="text"
                                name='verification'
                                defaultValue={nominee?.verification}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Verification No"

                            />
                        </div>


                    </div>



                    <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto mt-8">
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
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

export default UpdateNominee;
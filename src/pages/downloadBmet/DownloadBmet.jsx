import React from 'react';
import Navbar from './Navbar';
import DownloadCertificatesSection from './DownloadCertificatesSection';
import BMETRegistration from './BMETRegistration';
import AmiProbashiAppSection from './AmiProbashiAppSection';
import Footer from './Footer';

const DownloadBmet = () => {
    return (
        <div className='bg-[#F1FAF7]'>
            <Navbar></Navbar>
            <DownloadCertificatesSection></DownloadCertificatesSection>
            <BMETRegistration></BMETRegistration>
            <AmiProbashiAppSection></AmiProbashiAppSection>
            <Footer></Footer>
        </div>
    );
};

export default DownloadBmet;
import React from 'react';
import Navbar from './Navbar';
import DownloadCertificatesSection from './DownloadCertificatesSection';
import BMETRegistration from './BMETRegistration';
import AmiProbashiAppSection from './AmiProbashiAppSection';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

const DownloadBmet = () => {
    return (
        <div className='bg-[#F1FAF7]'>
            <Helmet>
                <title>Download Certificate & Cards</title>
            </Helmet>
            <Navbar></Navbar>
            <DownloadCertificatesSection></DownloadCertificatesSection>
            <BMETRegistration></BMETRegistration>
            <AmiProbashiAppSection></AmiProbashiAppSection>
            <Footer></Footer>
        </div>
    );
};

export default DownloadBmet;
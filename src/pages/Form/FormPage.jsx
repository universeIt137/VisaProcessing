import React from 'react';
import DataForm from './DataForm';
import VisaTable from './VisaTable';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const FormPage = () => {
    const axiosPublic = useAxiosPublic();


    const { data: nominees = [], refetch } = useQuery({
        queryKey: ['nominee'],
        queryFn: async () => {
            const res = await axiosPublic.get('/nominee');
            return res.data;
        }
    })
    return (
        <div className='lg:w-3/4 mx-auto  min-h-screen'>
            
            <DataForm refetch={refetch}></DataForm>
            <div className="mt-10 mb-40">
                <VisaTable nominees={nominees} refetch={refetch}></VisaTable>
            </div>
        </div>
    );
};

export default FormPage;
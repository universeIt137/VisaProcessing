import React from 'react';
import ManPowerForm from './ManPowerForm';
import ManPowerTable from './ManPowerTable';

const ManPower = () => {
    return (
        <div>
            <div className='lg:w-3/4 mx-auto  min-h-screen' >
                <ManPowerForm></ManPowerForm>
                <div>
                <ManPowerTable></ManPowerTable>
                </div>
            </div>
        </div>
    );
};

export default ManPower;
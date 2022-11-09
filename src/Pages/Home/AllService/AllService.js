import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import AllServiceCard from './AllServiceCard';

const AllService = () => {
    useTitle('Service')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <p className='text-center text-xl font-bold text-orange-600'>MyServices</p>
            <h1 className=' text-center my-5 text-4xl font-bold'>My Service is here, choice your favourite one!</h1>
            
            
           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 '>
           {
                services.map(service => <AllServiceCard key={service._id} service={service}></AllServiceCard>)
            }
           </div>
            
        </div>
    );
};

export default AllService;
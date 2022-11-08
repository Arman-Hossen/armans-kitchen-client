import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <p className='text-center text-xl font-bold '>MY Services</p>
            <h1 className=' text-center my-5 text-4xl font-bold'>I Provide This Food Via Online Delivary</h1>
            <p className='text-center '>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            
           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 '>
           {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
            
           </div>
           <div className='text-center m-5'>
            <Link to='/services'><button className="btn btn-primary">See All</button></Link>
            </div>
            
        </div>
    );
};

export default Services;
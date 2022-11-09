import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/error_page.png'
import useTitle from '../../hooks/useTitle';
import './Error.css'

const Error = () => {
    useTitle('404');
    return (
        <div >
        
           <div className='flex items-center justify-center align-middle'>
           <img src={logo} className='img-fluid pageError' alt="" />
           </div>
           <div className=' text-center'>
                    <h2 className='mb-8  text-dark'>
                        <span className='text-primary'>Error{" "}</span><span className='text-warning'>404</span>
                    </h2>
                    <p className='text-2xl font-thin mb-8'>
                        This is not the page , You are looking for.
                    </p>
                    <Link
                        to='/home'
                        
                        className='p-2 mt-5 text-decoration-none rounded-lg bg-primary text-light '
                    >
                        Back to homepage
                    </Link>
                    </div>
           
        
      </div>
    );
};

export default Error;
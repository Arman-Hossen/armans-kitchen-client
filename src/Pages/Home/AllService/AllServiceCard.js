import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCard = ({service}) => {
    const {_id,img, price, title} = service;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mb-4">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AllServiceCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { ImageViewer } from "react-image-viewer-dv"

const ServicesCard = ({service}) => {
    const {_id,img, price, title,rating,description} = service;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mb-4">
  <figure><ImageViewer><img className='h-60' src={img} alt="" /></ImageViewer></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl font-semibold text-orange-600'>Price: {price}</p>
    <p className='text-xl font-semibold text-orange-600'>Rating: {rating}</p>
    <p className=''> {description.slice(0,100)+'...'}</p>
    <div className="card-actions justify-center">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">Veiw Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ServicesCard;
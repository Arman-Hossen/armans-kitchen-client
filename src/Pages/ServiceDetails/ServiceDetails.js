import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";
import { ImageViewer } from "react-image-viewer-dv"

const ServiceDetails = () => {
  const { _id,img, title, price, service_id, rating, total_reveiwer, description } =
    useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-center">You are Clicking : {title}</h1>
      <div className="grid grid-cols-1 m-4">
      <div className="card card-compact  bg-base-100 shadow-xl mb-4 text-center">
      <h2 className=" text-2xl font-bold text-center">{title}</h2>
  <figure><ImageViewer><img className='h-60' src={img} alt="" /></ImageViewer></figure>
  <div className="card-body">
    
    <p className='text-xl font-semibold text-orange-600'>Price: {price}</p>
    <p className='text-xl font-semibold text-orange-600'>Rating: {rating}</p>
    <p className=''> {description.slice(0,100)+'...'}</p>
   
  </div>
</div>
        <div></div>
      </div>
    </div>
  );
};

export default ServiceDetails;

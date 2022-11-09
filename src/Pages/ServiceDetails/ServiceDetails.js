import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";
import { ImageViewer } from "react-image-viewer-dv";
import { AiFillStar } from "react-icons/ai";
import ShowReview from "../ShowReview/ShowReview";

const ServiceDetails = () => {
  const {
    _id,
    img,
    title,
    price,
    service_id,
    rating,
    total_reveiwer,
    description,
  } = useLoaderData();
  
  
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-center">Details And Review</h1>
      <div className="grid grid-cols-1 m-4">
        <h2 className="text-center font-bold text-2xl text-orange-500 m-5">
          {" "}
          Service Details
        </h2>
        <div className="mx-auto card w-3/4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <ImageViewer>
              <img className="rounded-xl w-full" src={img} alt="" />
            </ImageViewer>
                </figure>
                <div className="card-body items-center text-center">
                   <h2 className="card-title">Product Id: {service_id}</h2>
                    <h2 className="card-title">Name: {title}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <h2 className="card-title">Reveiw Given By {total_reveiwer} people</h2>
                    <p className="flex items-center">
                        <AiFillStar className="text-orange-400" />{" "}
                        <span>{rating}</span>

                        
                    </p>
                    
                    <p>{description}</p>
                </div>
            </div>
       
        <div>
          <h2 className="text-center font-bold text-2xl text-orange-500 m-5">
            {" "}
            Reveiw
          </h2>
          <div className="">
          <ShowReview id={_id}></ShowReview>
          </div>
          {
             user?.email?
             <>
             <div className="text-center">
             <Link to={`/reveiw/${_id}`}><button className="btn btn-primary">Give Reviw</button></Link>
             </div>
             </>
             :
             <>
             <div className="text-center">
             <Link to={`/reveiw/${_id}`}><button  className="btn btn-primary">Log in for Give Reveiw</button></Link>
             

             
             </div>
             </>
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

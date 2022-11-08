import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";
import { ImageViewer } from "react-image-viewer-dv";
import { BsFillPeopleFill } from "react-icons/bs";

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
      <h1 className="text-center">Details And Reveiw </h1>
      <div className="grid grid-cols-1 m-4">
        <h2 className="text-center font-bold text-2xl text-orange-500 m-5">
          {" "}
          Service Details
        </h2>
        <div className="card card-compact  bg-base-100 shadow-xl mb-4 text-center">
          <figure>
            <ImageViewer>
              <img className="rounded-xl w-full" src={img} alt="" />
            </ImageViewer>
          </figure>
          <h2 className=" text-2xl font-bold text-center m-4 ">{title}</h2>
          <div className="card-body ">
            <p className="text-xl font-semibold text-orange-600">
              Product No: {service_id}
            </p>
            <p className="text-xl font-semibold text-orange-600">
              Price: {price}
            </p>
            <p className="text-xl font-semibold text-orange-600">
              Rating: {rating}
            </p>
          </div>

          <p className=""> {description}</p>
          <p className="text-xl font-semibold text-orange-600 m-4">
            {" "}
            Reveiw Given By {total_reveiwer} people
          </p>
        </div>
        <div>
          <h2 className="text-center font-bold text-2xl text-orange-500 m-5">
            {" "}
            Reveiw
          </h2>
          {
             user?.email?
             <>
             <div className="text-center">
             <Link to='/'><button className="btn btn-primary">Give Reviw</button></Link>
             </div>
             </>
             :
             <>
             <div className="text-center">
             <Link to='/login'><button className="btn btn-primary">Log in for Give Reveiw</button></Link>
             </div>
             </>
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

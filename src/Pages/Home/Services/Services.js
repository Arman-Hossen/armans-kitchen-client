import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://armans-kitchen-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <p className="text-center text-xl font-bold text-orange-500 ">
        MY Services
      </p>
      <h1 className=" text-center my-5 text-4xl font-bold">
        I Provide This Food Via Online Delivary
      </h1>
      <p className="text-center ">
        Food is for eating, and good food is to be enjoyed... I think food is,
        actually, very beautiful in itself <br /> I think food is, actually,
        very beautiful in itself.{" "}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 ">
        {services.slice(0, 3).map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="text-center m-5">
        <Link to="/services">
          <button className="btn btn-primary">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;

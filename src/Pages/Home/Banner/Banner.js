import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen rounded-lg"  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1532635224-cf024e66d122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome To Arman's Kitchen</h1>
        <p className="mb-5">A recipe has no soul. You as the cook must bring soul to the recipe.So try My Food.</p>
        <button className="btn btn-primary mr-3">Get Started</button>
        <button className="btn btn-outline btn-primary">Contact Me</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;

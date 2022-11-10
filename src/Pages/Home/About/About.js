import React from "react";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className=" w-4/5 h-full  shadow-2xl rounded-full"
          />
          <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
            alt=""
            className=" absolute w-3/5 right-5 top-1/2 border-8  shadow-2xl rounded-full"
          />
        </div>
        <div className="w-1/2">
          <p className=" text-sm  md:text-xl font-bold mt-4 ">About Me</p>
          <h1 className=" my-5 text-4xl font-bold font-serif text-orange-400">
            Food is my passion <br /> & I am crazy
            <br />
            about cooking
          </h1>
          <p className="py-6">
            The Internet has made it possible for us to enjoy quite a number of
            opportunities. One of these is the ability to sell products and
            services online. i graves this Opportunities.
          </p>
          <p className="py-6">
            As i am crazy about cooking , i am willing to share it with public
            also . For that reason i am starting this onlne kitchen. Which is
            managed by only mine.
          </p>

          <button className="btn btn-outline ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

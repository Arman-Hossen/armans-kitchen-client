import React from 'react';

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
      <div className='w-1/2 relative'>
      <img src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='' className=" w-4/5 h-full rounded-lg shadow-2xl rounded-full" />
      <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt='' className=" absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl rounded-full" />
      </div>
         <div  className='w-1/2'>
          <p className='  text-xl font-bold '>About Me</p>
        <h1 className=" my-5 text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
  
        <button className="btn btn-primary ">Get More Info</button>
      </div>
    </div>
  </div>
    );
};

export default About;
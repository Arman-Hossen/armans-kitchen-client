import React from 'react';

const Myspecalist = () => {
    return (
        <div>
            <section className=" w-4/5 mx-auto rounded-lg mb-3">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-orange-400 ">
                        Why Choose My Food?
                    </h2>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <article className=" rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight  ">
                            
                            <h2 className='ml-10 text-center text-orange-500'>Good Taste</h2>
                        </div>
                        <p className="mb-5 ml-10  font-medium">
                            My Food are very tasty to eat , <br /> you can Cheak my previos rating.
                        </p>
                    </article>
                    <article className=" rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight  ">
                            
                            <h2 className='ml-10 text-center text-orange-500'>Cooking in Healthy way</h2>
                        </div>
                        <p className="mb-5 ml-10  font-medium">
                            My Food are cooks by mine , <br /> I care about every conponents and secure the health matter..
                        </p>
                    </article>
                    <article className=" rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight  ">
                            
                            <h2 className='ml-10 text-center text-orange-500'>Fast Delivery</h2>
                        </div>
                        <p className="mb-5 ml-10  font-medium">
                            I never compromise with my food , <br /> I always try to deliver my order on time.
                        </p>
                    </article>
                    <article className=" rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight  ">
                            
                            <h2 className='ml-10 text-center text-orange-500'>Reasonable Price</h2>
                        </div>
                        <p className="mb-5 ml-10  font-medium">
                        My All foods are Reasonable, anyone can <br /> easily buy it , and i provide authentice foods.
                        </p>
                    </article>
                    
                </div>
            </div>
        </section>
            
        </div>
    );
};

export default Myspecalist;
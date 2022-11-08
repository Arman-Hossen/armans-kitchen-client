import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';

const ReveiwForm = () => {
    const dateobj = new Date();
    const date = dateobj.toISOString();
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const img = form.photoUrl.value;
        const rating = form.rating.value;
        const date = form.date.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            reviewer: name,
            email,
            img,
            rating,
            date,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
        <form onSubmit={handleReview} className='m-10' >
            <h2 className="text-4xl text-center">You are giving reveiw for: {title}</h2>
            <h4 className="text-3xl text-center">Price: {price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                <input name="photoUrl" type="text" placeholder="Photo Url" className="input input-ghost w-full  input-bordered" required />
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" />
                <input name="date" type="text" placeholder="Date" defaultValue={date} className="input input-ghost w-full  input-bordered" readOnly />
            </div>
            <textarea name="message" className="textarea textarea-bordered mt-5 h-24 w-full" placeholder="FeedBack" required></textarea>
            <div className='text-center'>
            <input className='btn btn-primary' type="submit" value="Submit Reveiw" />
            </div>

            
        </form>
    </div>
    );
};

export default ReveiwForm;
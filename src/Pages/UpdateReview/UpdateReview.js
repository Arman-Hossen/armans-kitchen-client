import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const UpdateReview = () => {
    const data = useLoaderData();
    const {_id,message,serviceName,rating,service,price,reviewer,email,img,date} = data;
    const [user, setUser] = useState( data);

    const handleUpdateUser = (event) => {
        event.preventDefault();
        console.log(user);
    
        fetch(`http://localhost:5000/reviews/${_id}`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
    
        })
        .then((res) => res.json())
          .then((data) => {
    
            if (data.modifiedCount > 0){
                alert('User Updated');
                
               
            }
            
          
          });
    
        
      };


    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
        
      };
    return (
        <div>
        <form onSubmit={handleUpdateUser}  className='m-10' >
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* <input onChange={handleInputChange} name="service" type="text" placeholder="service" defaultValue={service} className="input input-ghost w-full  input-bordered" readOnly required/>
                <input onChange={handleInputChange} name="serviceName" type="text" placeholder="serviceName" defaultValue={serviceName} className="input input-ghost w-full  input-bordered" readOnly required />
                <input onChange={handleInputChange} name="price" type="text" placeholder="price" defaultValue={price} className="input input-ghost w-full  input-bordered" readOnly />
                <input onChange={handleInputChange} name="reviewer" type="text" placeholder="reviewer" defaultValue={reviewer} className="input input-ghost w-full   input-bordered" readOnly />
                <input onChange={handleInputChange} name="email" type="text" placeholder="email" defaultValue={email} className="input input-ghost w-full  input-bordered" readOnly />
                <input onChange={handleInputChange} name="img" type="text" placeholder="img" defaultValue={img} className="input input-ghost w-full  input-bordered" readOnly required /> */}
                <input onChange={handleInputChange} name="rating" type="text" placeholder="rating" defaultValue={rating} className="input input-ghost w-full  input-bordered" required />
                <input onChange={handleInputChange} name="date" type="text" placeholder="date" defaultValue={date} className="input input-ghost w-full  input-bordered" readOnly required />
            </div>
            <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered mt-5 h-24 w-full" placeholder="FeedBack" defaultValue={message} required></textarea>
            <div className='text-center'>
            <input className='btn btn-primary' type="submit" value="update Reveiw" />
            </div>

            
        </form>
        
    </div>
    );
};

export default UpdateReview;
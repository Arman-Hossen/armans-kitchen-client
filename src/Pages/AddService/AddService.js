import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const dateobj = new Date();
    const date = dateobj.toISOString();
    
    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const service_id = form.service_id.value;
        const title = form.title.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const total_reveiwer = form.total_reveiwer.value;
        const description = form.description.value;
        const date = form.date.value

        const review = {
            service_id,
            title,
            price,
            rating,
            img,
            total_reveiwer,
            description,
            date
        }

        fetch('https://armans-kitchen-server.vercel.app/services', {
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
                    toast.success("Service Post on Database successfully", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                    });
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
    

    return (
        <div>
            <h2 className='text-center text-3xl text-orange-600 font-bold'>Add a New Subject Here!</h2>
            <div>
        <form onSubmit={handleService}  className='m-10' >
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="service_id" type="text" placeholder="Service id" className="input input-ghost w-full  input-bordered" required/>
                <input name="title" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" required/>
                <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required />
                <input name="rating" type="text" placeholder="Rating"  className="input input-ghost w-full  input-bordered"  />
                <input name="img" type="text" placeholder="Image URL" className="input input-ghost w-full  input-bordered" />
                <input name="total_reveiwer" type="text" placeholder="Total Reviewer" className="input input-ghost w-full  input-bordered"  />
            </div>
            
            <textarea name="description" className="textarea textarea-bordered mt-5 h-24 w-full" placeholder="Description" required></textarea>
            <input name="date" type="text" placeholder="Date" defaultValue={date} className="input input-ghost w-full mt-5 h-24  input-bordered" readOnly />
            <div className='text-center'>
            <input className='btn btn-primary mt-5' type="submit" value="Submit Service" />
            </div>

            
        </form>
        
    </div>

    <ToastContainer />
    </div>
    );
};

export default AddService;
import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewTable = ({review, handleDelete}) => {
    const { _id, serviceName, message, reviewer, img,rating } = review;
    
    return (
        <tr>
        <td>
            <label>
                <button onClick={() => handleDelete(_id)}  className='btn btn-ghost'>X</button>
            </label>
        </td>
        <td>
        {serviceName}

        </td>
        <td>{reviewer}</td>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="rounded-full w-24 h-24">
                        {
                             
                            <img src={img} alt="" />
                            }
                    </div>
                </div>
                
            </div>
        </td>
        <td>
            {message}
        </td>
        
        <td>{rating}</td>
        <td>
            <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
        </td>
    </tr>
    );
};

export default MyReviewTable;
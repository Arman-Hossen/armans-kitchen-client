import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";
import MyReviewTable from "./MyReviewTable";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, SetReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => SetReviews(data));
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = reviews.filter(rev => rev._id !== id);
                SetReviews(remaining);
            }
        })
    }
}

  return (
    <div>
      {reviews.length === 0 ? (
        <>
          <h2 className=" text-center m-40 mx-auto text-3xl text-orange-600 font-bold">
            No reviews were added
          </h2>
        </>
      ) : (
        <>
          <h2 className=" text-center text-3xl m-5  font-bold">You have {reviews.length} Reviw</h2>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Service Name</th>
                  <th>Reviewer</th>
                  <th>Photo</th>
                  <th>Feed Back</th>
                  <th>Rating</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{
                reviews.map(review =><MyReviewTable
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></MyReviewTable>)}</tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReview;

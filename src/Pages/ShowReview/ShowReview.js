import React, {  useEffect, useState } from "react";



import ReviewSingle from "./ReviewSingle";

const ShowReview = ({ id }) => {
    
  const [showReview, setShowReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${id}`)
      .then((res) => res.json())
      .then((data) => setShowReview(data));
  }, [id]);

//   const { reviewer, img, rating, serviceName, message } = showReview;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {
            showReview.map(review =><ReviewSingle key={review._id} review={review} ></ReviewSingle>)

        }

    </div>
    
  );
};

export default ShowReview;

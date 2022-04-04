import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "./Reviews.css";

const Reviews = () => {

  const [reviews , setReviews] = useState([])

  useEffect( () => {
    fetch("fake-review.json")
    .then(res => res.json())
    .then(data => setReviews(data))
  } , []);


    return (
      <div>
        <h2 className="review-title">What our customers say</h2>
        <div className="reviews">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}

          
        </div>
      </div>
    );
};

export default Reviews;
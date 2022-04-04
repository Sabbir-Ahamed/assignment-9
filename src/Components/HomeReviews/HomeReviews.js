import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeReview from '../HomeReview/HomeReview';
import "./HomeReviews.css";

const Review = () => {

    const [HomeReviews, setHomeReviews] = useState([]);

    useEffect(() => {
      fetch("fake-review.json")
        .then((res) => res.json())
        .then((data) => setHomeReviews(data));
    }, []);

    const sliceReviwes = HomeReviews.slice(0,3);
    console.log(sliceReviwes);

  return (
    <div>
      <h1 className="home-reviews-title">Customer Reviews</h1>
      <div className="home-reviews">
        {sliceReviwes.map((sliceReview) => (
          <HomeReview
            key={sliceReview.id}
            sliceReview={sliceReview}
          ></HomeReview>
        ))}
      </div>
      <div className='home-reviews-button'><Link className="btn" to="/reviews"> See All Reviews</Link></div>
      
    </div>
  );
};

export default Review;
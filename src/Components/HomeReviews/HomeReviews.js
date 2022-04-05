import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';
import "./HomeReviews.css";

const Review = () => {

  const [reviews] = useReviews();

    const sliceReviwes = reviews.slice(0,3);

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
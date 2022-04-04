import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const HomeReview = (props) => {
    const { name, comment, picture } = props.sliceReview;

    return (
      <div>
        <div className="review">
          <img src={picture} alt="user-img" />
          <div>
            <h2>{name}</h2>
            <p>{comment}</p>
            <StarIcon className="icon" />
            <StarIcon className="icon" />
            <StarIcon className="icon" />
            <StarIcon className="icon" />
            <StarIcon className="icon" />
          </div>
        </div>
      </div>
    );
};

export default HomeReview;
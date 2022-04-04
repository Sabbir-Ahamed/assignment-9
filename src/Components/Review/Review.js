import React from 'react';
import "./Review.css";

const Review = (props) => {
    
    const {name , comment , picture} = props.review;
    console.log(picture);
    return (
        <div>
            <div className="review">
                <img src={picture} alt="user-img" />
                <div>
                    <h2>{name}</h2>
                    <p>{comment}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default Review;
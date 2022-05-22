import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Reviews</span>
      </div>
      <div className="card-body">
        {reviews &&
          reviews.map(review => (
            <p className="pill mb-3" key={review._id}>
              {review.reviewBody} //{' '}
              <Link to={`/profile/${review.userId}`} style={{ fontWeight: 700 }}>
                {review.firstName} on {review.createdAt}
                console.log({review.firstName})
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;

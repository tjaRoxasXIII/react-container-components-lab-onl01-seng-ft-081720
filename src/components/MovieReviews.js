// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
    
    <div className={"review-list"}>
        { reviews.map(review => 
            <h3 key={review.display_title} className={"review"}>{review.display_title}</h3>
        
        )}
    </div>
)

export default MovieReviews;
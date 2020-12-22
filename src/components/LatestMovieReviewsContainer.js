import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                this.setState({ reviews: json.results })
            })
                
    }

    render() {
        return (
            <div className={"latest-movie-reviews"}>
                {/* <button onClick={this.getReviews}>Get Movie Reviews</button> */}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}
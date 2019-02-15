import * as React from "react";
import {reviews} from "./databasetest2";

export default class UserReviews extends React.Component {
    render() {
        const UserReview = reviews.map(review => {
            return (
                <li id="listReviews" key={review.id}>
                    <p id="titleReview">{review.title}</p>
                    <p>{review.titleBook}</p>
                    <p id="commentReview">{review.comment}</p>
                    <p>{review.date}</p>
                    <br />
                </li>
            );
        });

        return <div>{UserReview}</div>;
    }
}

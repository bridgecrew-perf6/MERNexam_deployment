import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {navigate} from '@reach/router';
import Stars from '../Components/resStars';
import moment from 'moment';



const ReviewRes = props => {
    const [restaurant,setRestaurant] = useState({reviews: []});
    const [name,setName] = useState("");
    const [rating,setRating] = useState(3);
    const [content,setContent] = useState("");
    const [errors,setErrors]= useState({});
    
    function fetch() {
        axios.get(`http://localhost:8000/restaurants/${props._id}`)
        .then(res => {
            console.log(res.data.restaurant);
            setRestaurant(res.data.restaurant);
        })
        .catch(err => console.error(err))
        }
    useEffect(()=> {
        fetch();
    },[]);
    Array.prototype.reverseRev= function() {
        const copy= [...this];
        copy.reverse();
        return copy;
    }
    const ratingAvrage = (revs) =>{
        let total=0
        for(let rev of revs){
            total += rev.rating
        }
        return (total / revs.length ).toFixed(1);
    }
    const reviewRes = (e) => {
        e.preventDefault();
        const newReview = {name,rating,content};
        axios.post(`http://localhost:8000/restaurants/${props._id}/review` ,newReview)
        .then(res => {
            console.log(res.data.restaurant);
            if(res.data.errors){
                setErrors(res.data.errors);
            }
            else {
                fetch();
                setErrors({});
            }
        })
        .catch(err => console.error(err))
        
        }
    return (
    <div className="container" >
        <div className="row my-5">
            <div className="col-sm-5  ">
                <div className="card">
                    <div className="card-header bg-dark text-light">{restaurant.name }</div>
                    <div className="card body">
                    <p>Cuisine: {restaurant.cuisine}  </p>
                    <p>Year Established: {restaurant.yearOpened}  </p>
                    <p>Description: {restaurant.description}  </p>
                    <p>Average rating: {ratingAvrage(restaurant.reviews)} </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-5  ">
            <div className="card">
                    <div className="card-header bg-dark text-light">Leave A Review </div>
                    <div className="card body">
                        <form onSubmit={reviewRes}>
                            <div className="form-group">
                                <label>Your Name: </label>
                                <input type="text"  className="form-control" onChange={e => setName(e.target.value)} value={name} />
                                <p className="text-danger">{ errors.name?errors.name.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Rating: </label>
                                <select  onChange={e => setRating(e.target.value)} value={rating} >
                                    <option value="1">★☆☆☆☆</option>
                                    <option value="2">★★☆☆☆</option>
                                    <option value="3">★★★☆☆</option>
                                    <option value="4">★★★★☆</option>
                                    <option value="5">★★★★★</option>
                                </select>
                                <p className="text-danger">{ errors.rating?errors.rating.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Content: </label>
                                <input type="text"  className="form-control" onChange={e => setContent(e.target.value)} value={content}/>
                                <p className="text-danger">{ errors.content?errors.content.message:""}</p>
                            </div>
                            <input type="submit" value="Leave A Review" className="btn btn-primary"/>
                        </form>
                    </div>
            </div>
        </div> 
            <div className="col-10  ">
            <div className="card">
                    <div className="card-header bg-dark text-light">{restaurant.name } Reviews</div>
                        {
                            restaurant.reviews.reverseRev().map((rev) =>
                            <div className="card body"> 
                            <Stars rating={rev.rating}/>
                            <p>{rev.name} says :{rev.content} </p>
                            <p>{moment(rev.createdAt).fromNow()}</p>
                            </div>
                            )
                        }
                </div>
            </div>
        </div>             
    </div>
    );

}
export default ReviewRes;



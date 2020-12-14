import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const DisplayRes = props => {

    const [restaurants, setRestaurants]= useState([]);
    const [q, setQ]= useState("");
    function  bubleSort(restaurants)  {
        const arr=[...restaurants];
        for(let i=0; i<arr.length;i++){
            for(let j=0; j<arr.length-1;j++ ){
                if(arr[j].ratingAverage < arr[j+1].ratingAverage ){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
        return arr;
    }
    const addAverageRating = (restaurants) =>{
        const arr=[];
        for(let res of restaurants){
            if(res.reviews.length < 1){
                arr.push({...res, ratingAverage: 0} );
                continue;
            }
            let total=0;
            for(let rev of res.reviews ){
                total += rev.rating;
            }
            let av= total/res.reviews.length;
            arr.push({...res, ratingAverage: av.toFixed(1)} );
        }
        return arr;
    }
    function fetch() {
        axios.get("http://localhost:8000/restaurants")
        .then(res => {
            console.log(res.data.restaurants);
            setRestaurants(
                bubleSort(
                    addAverageRating(res.data.restaurants)
                )
                );
        })
        .catch(err => console.error(err))
        }
    useEffect(()=> {
        fetch();
    },[]);
    const deleteRes = (_id) => {
        axios.delete(`http://localhost:8000/restaurants/delete/${_id}`)
        .then(res => {
            console.log(res.data.students);
            fetch();
        })
        .catch(err => console.error(err))
    }
    
    return (
    <div className="container" >
        <input type="search" placeholder="search" className=" search col-sm-6 mt-2 mb-2 my-2" onChange={e =>setQ(e.target.value)} />
        {restaurants.filter(r => r.name.toLowerCase().includes(q.toLowerCase())).length < 1 ? <p>No results</p>:""}
            {
                restaurants.filter(r => r.name.toLowerCase().includes(q.toLowerCase())).map((rest ) => 
                <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header bg-dark text-light">{rest.name} </div>
                        <div className="card-body">
                        <p>Cuisine: {rest.cuisine}  </p>
                        <p>Year Established: {rest.yearOpened}  </p>
                        <p>Description: {rest.description}  </p>
                        <p>Average Rating: {rest.ratingAverage}  </p>
                        <div className="d-flex justify-content-between ">
                            <Link to={`/view/${rest._id}`} className="btn btn-outline-info" >View</Link>
                            <Link to={`/edit/${rest._id}`} className="btn btn-outline-success" >Edit</Link> 
                            <botton className="btn btn-outline-danger" onClick={e => deleteRes(rest._id)}>Delete</botton>
                        </div>
                        </div>
                    </div>
                </div>   
                </div>            
                )
            }
    </div>
    );

}
export default DisplayRes;



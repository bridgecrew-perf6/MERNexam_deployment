import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';



const UpdateRes = props => {
    const [name,setName] = useState("");
    const [cuisine,setCuisine] = useState("");
    const [yearOpened,setYearOpened] = useState(2020);
    const [description,setDescription] = useState("");
    const [errors,setErrors]= useState({});
    // function fetch() {
    //     axios.get(`http://localhost:8000/restaurants/${props._id}`)
    //     .then(res => {
    //         // console.log(res.data.restaurants);
    //         setName(res.data.restaurant.name);
    //         setCuisine(res.data.restaurant.cuisine);
    //         setYearOpened(res.data.restaurant.yearOpened);
    //         setDescription(res.data.restaurant.description);
    //     })
    //     .catch(err => console.error(err))
    //     }
    useEffect(()=> {
        axios.get(`http://localhost:8000/restaurants/${props._id}`)
        .then(res => {
            console.log("theeeee id",props._id);
            setName(res.data.restaurant.name);
            setCuisine(res.data.restaurant.cuisine);
            setYearOpened(res.data.restaurant.yearOpened);
            setDescription(res.data.restaurant.description);
        })
        .catch(err => console.error(err))
    },[]);
    const updateRestaurant = (e) => {
        e.preventDefault();
        const updatedRestaurant = {name,cuisine,yearOpened,description};
        axios.put(`http://localhost:8000/restaurants/update/${props._id}` ,updatedRestaurant)
        .then(res => {
            console.log(res.data.restaurants);
            if(res.data.errors){
                setErrors(res.data.errors);
            }
            else {
                navigate("/");
            }
        })
        .catch(err => console.error(err))
        
        }
    return (
    <div className="container" >
        <div className="row my-5">
            <div className="col-sm-8 offset-sm-2 ">
                <div className="card">
                    <div className="card-header bg-dark text-light">Update A  Restaurant </div>
                    <div className="card body">
                        <form onSubmit={updateRestaurant}>
                            <div className="form-group">
                                <label>Name: </label>
                                <input type="text"  className="form-control" onChange={e => setName(e.target.value)} value={name} />
                                <p className="text-danger">{ errors.name?errors.name.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Cuisine: </label>
                                <input type="text"  className="form-control" onChange={e => setCuisine(e.target.value)} value={cuisine}/>
                                <p className="text-danger">{ errors.cuisine?errors.cuisine.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Year Established: </label>
                                <input type="Number"  className="form-control " max="2020" onChange={e => setYearOpened(e.target.value)} value={yearOpened}/>
                                <p className="text-danger">{ errors.yearOpened?errors.yearOpened.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <input type="text"  className="form-control" onChange={e => setDescription(e.target.value)} value={description}/>
                                <p className="text-danger">{ errors.description?errors.description.message:""}</p>
                            </div>
                            <input type="submit" value="Update A New Restaurant " className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>              
    </div>
    );

}
export default UpdateRes;



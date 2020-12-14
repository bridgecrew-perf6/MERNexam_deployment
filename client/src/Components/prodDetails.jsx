import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate} from '@reach/router';


const DisplayProds = props => {

    const [title,setTitle] = useState("");
    const [price,setPrice] = useState(1);
    const [description,setDescription] = useState("");
    function fetch() {
        axios.get(`http://localhost:8000/product/${props._id}`)
        .then(res => {
            console.log(res.data.product);
            setTitle(res.data.product.title);
            setPrice(res.data.product.price);
            setDescription(res.data.product.description);
        })
        .catch(err => console.error(err))
        }
    useEffect(()=> {
        fetch();
    },[]);
    const deleteProd = (_id) => {
        axios.delete(`http://localhost:8000/product/delete/${_id}`)
        .then(res => {
            console.log(res.data.students);
            navigate("/")
            
        })
        .catch(err => console.error(err))
    }
    return (
    <div className="container" >
        <div className="row">
                <div className="col-sm-8 offset-sm-2 ">
                    <div className="card">
                        <div className="card-header bg-dark text-light">All Products  </div>
                        <div className="card-body">
                            <h3>{title}</h3>
                            <p>Price: {price}</p>
                            <p>Description: {description}</p>
                            <div className="d-flex justify-content-between ">
                                <Link to={`/edit/${props._id}`} className="btn btn-outline-success" >Edit</Link> 
                                <botton className="btn btn-outline-danger" onClick={e => deleteProd(props._id)}>Delete</botton>
                            </div>
                        </div>
                    </div>
                </div>
        </div>              
    </div>
    );
}
export default DisplayProds;



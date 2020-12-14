import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';




const EditProd = props => {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState(1);
    const [description,setDescription] = useState("");
    const [errors,setErrors]= useState({});
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
    
    const editProduct = (e) => {
        e.preventDefault();
        const updatedProduct = {title,price,description};
        axios.put(`http://localhost:8000/product/update/${props._id}` ,updatedProduct)
        .then(res => {
            console.log(res.data.product);
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
                    <div className="card-header bg-dark text-light">Update A Product </div>
                    <div className="card body">
                        <form onSubmit={editProduct}>
                            <div className="form-group">
                                <label>Title: </label>
                                <input type="text"  className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                                <p className="text-danger">{ errors.title?errors.title.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Price: </label>
                                <input type="Number"  step="0.1" className="form-control " min="0.1" onChange={e => setPrice(e.target.value)} value={price}/>
                                <p className="text-danger">{ errors.price?errors.price.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <input type="text"  className="form-control" onChange={e => setDescription(e.target.value)} value={description}/>
                                <p className="text-danger">{ errors.description?errors.description.message:""}</p>
                            </div>
                            <input type="submit" value="Update A  Product " className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>          
    </div>
    );

}
export default EditProd;



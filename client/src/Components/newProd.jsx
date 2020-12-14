import React, {useState,useEffect} from 'react';
import axios from 'axios';
// import {navigate} from '@reach/router';
import {Link} from '@reach/router';



const AddProd = props => {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState(1);
    const [description,setDescription] = useState("");
    const [errors,setErrors]= useState({});
    const [products, setProducts]= useState([]);
    function fetch() {
    axios.get("http://localhost:8000/products")
    .then(res => {
        console.log(res.data.products);
        setProducts(res.data.products);
    })
    .catch(err => console.error(err))
    }
    useEffect(()=> {
    fetch();
    },[]);
    
    const addProduct = (e) => {
        e.preventDefault();
        const newProduct = {title,price,description};
        axios.post("http://localhost:8000/product/new" ,newProduct)
        .then(res => {
            console.log(res.data.products);
            if(res.data.errors){
                setErrors(res.data.errors);
            }
            else {
                fetch();
            }
        })
        .catch(err => console.error(err))
        
        }
        const deleteProd = (_id) => {
            axios.delete(`http://localhost:8000/product/delete/${_id}`)
            .then(res => {
                console.log(res.data.students);
                fetch();
            })
            .catch(err => console.error(err))
        }
    return (
    <div className="container" >
        <div className="row my-5">
            <div className="col-sm-8 offset-sm-2 ">
                <div className="card">
                    <div className="card-header bg-dark text-light">Add A New Product </div>
                    <div className="card body">
                        <form onSubmit={addProduct}>
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
                            <input type="submit" value="Add A New Product " className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        <div className="row">
                <div className="col-sm-8 offset-sm-2 ">
                    <div className="card">
                        <div className="card-header bg-dark text-light">All Products  </div>
                        <div className="card-body">
                        {
                        products.map((prod ) => 
                        <div>
                            <Link to={`/displayDetails/${prod._id}` } className="d-block" >{prod.title}</Link>
                            <div className="d-flex justify-content-between ">
                                <Link to={`/edit/${prod._id}`} className="btn btn-outline-success" >Edit</Link> 
                                <botton className="btn btn-outline-danger" onClick={e => deleteProd(prod._id)}>Delete</botton>
                            </div>
                        </div>
                        )}
                        
                        </div>
                    </div>
            </div>              
        </div>             
    </div>
    );

}
export default AddProd;



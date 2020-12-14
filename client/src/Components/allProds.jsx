import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const DisplayProds = props => {

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
    // const deleteRes = (_id) => {
    //     axios.delete(`http://localhost:8000/restaurants/delete/${_id}`)
    //     .then(res => {
    //         console.log(res.data.students);
    //         fetch();
    //     })
    //     .catch(err => console.error(err))
    // }
    return (
    <div className="container" >
        <div className="row">
            {
                products.map((prod ) => 
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-header bg-dark text-light">All Products  </div>
                        <div className="card-body">
                            <Link to={`/displayDetails/${prod._id}`}  >{prod.title}</Link>
                        </div>
                    </div>
                </div>              
                )
            }
        </div> 
        <hr/>             
    </div>

    );

}
export default DisplayProds;



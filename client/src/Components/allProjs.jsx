import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import moment from 'moment';


const DisplayProjs = props => {

    const [projects, setProjects]= useState([]);
    // function  bubleSort(restaurants)  {
    //     const arr=[...restaurants];
    //     for(let i=0; i<arr.length;i++){
    //         for(let j=0; j<arr.length-1;j++ ){
    //             if(arr[j].ratingAverage < arr[j+1].ratingAverage ){
    //                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
    //             }
    //         }
    //     }
    //     return arr;
    // }
    function fetch() {
        axios.get("http://localhost:8000/api/projects")
        .then(res => {
            console.log(res.data.projects);
            setProjects(res.data.projects);
        })
        .catch(err => console.error(err))
        }
    useEffect(()=> {
        fetch();
    },[]);
    const startProj = (_id) => {
        axios.put(`http://localhost:8000/api/project/start/${_id}`)
        .then(res => {
            console.log(res.data.projects);
            fetch();
        })
        .catch(err => console.error(err))
    }
    const completeProj = (_id) => {
        axios.put(`http://localhost:8000/api/project/complete/${_id}`)
        .then(res => {
            console.log(res.data.projects);
            fetch();
        })
        .catch(err => console.error(err))
    }
    const deleteProj = (_id) => {
        axios.delete(`http://localhost:8000/api/project/delete/${_id}`)
        .then(res => {
            console.log(res.data.projects);
            fetch();
        })
        .catch(err => console.error(err))
    }
    
    return (
    <div className="container" >
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header "><h2>Backlog</h2> </div>
            {
                projects.filter(p => p.status === "Backlog").map((proj ) => 
                        <div className="card-body">
                        <p>{proj.project} </p>
                        {moment().format() > moment(proj.due).format()?<p >Oh!It's past due</p>: <p >Due: {moment(proj.due).format("MM,dd,YYYY")}</p>}
                        <botton className="btn btn-outline-info" onClick={e => startProj(proj._id)}>Start Project</botton>
                        </div>
                )
            }
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header "><h2>In Progress</h2> </div>
            {
                projects.filter(p => p.status === "In Progress").map((proj ) => 
                        <div className="card-body">
                        <p>{proj.project} </p>
                        {/* <p>Cuurent date: {moment().format()}</p> */}
                        {moment().format() > moment(proj.due).format()?<p >Oh!It's past due</p>: <p >Due: {moment(proj.due).format("MM,dd,YYYY")}</p>}
                        <botton className="btn btn-outline-success" onClick={e => completeProj(proj._id)}>Move to Completed</botton>
                        </div>
                )
            }
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header "><h2>Completed</h2> </div>
            {
                projects.filter(p => p.status === "Completed").map((proj ) => 
                        <div className="card-body">
                        <p>{proj.project} </p>
                        {moment().format() > moment(proj.due).format()?<p >Oh!It's past due</p>: <p >Due: {moment(proj.due).format("MM,dd,YYYY")}</p>}
                        <botton className="btn btn-outline-danger" onClick={e => deleteProj(proj._id)}>Remove Project</botton>
                        </div>
                )
            }
                </div>
            </div>
        </div>
    <Link to="/new" className="btn btn-outline-info" >Add A New Project</Link>
    </div>
    );

}
export default DisplayProjs;



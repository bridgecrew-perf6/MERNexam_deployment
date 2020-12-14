import React, {useState} from 'react';
import axios from 'axios';
import {Link,navigate} from '@reach/router';



const AddProj = props => {
    const [project,setProject] = useState("");
    const [due,setDue] = useState("");
    const [status,setStatus] = useState("Backlog");
    const [errors,setErrors]= useState({});
    
    const addProject = (e) => {
        e.preventDefault();
        const newProject = {project,due,status};
        axios.post("http://localhost:8000/api/project/new" ,newProject)
        .then(res => {
            console.log(res.data.project);
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
        <Link to="/"  >Back to Dashboard</Link>
        <div className="row my-5">
            <div className="col-sm-8 offset-sm-2 ">
                <div className="card">
                    <div className="card-header bg-dark text-light"><p>Add A New Project </p></div>
                    <div className="card body">
                        <form onSubmit={addProject}>
                            <div className="form-group">
                                <label>Project: </label>
                                <input type="text"  className="form-control" onChange={e => setProject(e.target.value)} value={project} />
                                <p className="text-danger">{ errors.project?errors.project.message:""}</p>
                            </div>
                            <div className="form-group">
                                <label>Due Date: </label>
                                <input type="date"  className="form-control" onChange={e => setDue(e.target.value)} value={due}/>
                                <p className="text-danger">{ errors.due?errors.due.message:""}</p>
                            </div>
                            <input type="submit" value="Add A New Project " className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>              
    </div>
    );

}
export default AddProj;



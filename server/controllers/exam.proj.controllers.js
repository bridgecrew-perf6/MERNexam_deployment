const Projects = require("../models/exam.proj.model");
class Controller {
    gitAll(req,res)  {
        Projects.find()
        .then(projects => res.json({status:"ok",projects }))
        .catch(err => res.json(err));
    }
    create(req,res) {
        Projects.create(req.body)
        .then(project => res.json({status:"ok",project }))
        .catch(err => res.json(err));
    }
    create(req,res) {
        Projects.find()
        .then(projects => {
            let exists= false;
            for(let proj of projects){
                if(proj.project === req.body.project ){
                    exists= true;
                    break;
                }
            }
            if(exists){
                res.json({errors : {
                    project: {
                        message: `The project ${req.body.project} already exists!!`
                    }}})
                }
            else {
                Projects.create(req.body)
                .then(project => res.json({status:"ok",project }))
                .catch(err => res.json(err));
            }
        }
        ).catch(err => res.json(err));
    }
    start(req,res)  {
        Projects.updateOne({_id: req.params._id}, {status: "In Progress"})
        .then(project => res.json({status:"ok",project }))
        .catch(err => res.json(err));
    }
    complete(req,res)  {
        Projects.updateOne({_id: req.params._id}, {status: "Completed"})
        .then(project => res.json({status:"ok",project }))
        .catch(err => res.json(err));
    }
    delete(req,res)  {
        Projects.deleteOne({_id: req.params._id})
        .then(projects => res.json({status:"ok",projects }))
        .catch(err => res.json(err));
    }
    
}
module.exports = new Controller();
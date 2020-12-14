const Products = require("../models/prod.models")
class Controller {
    gitAll(req,res)  {
        Products.find()
        .then(products => res.json({status:"ok",products }))
        .catch(err => res.json(err));
    }
    gitOne(req,res)  {
        Products.findOne({_id: req.params._id})
        .then(product => res.json({status:"ok",product }))
        .catch(err => res.json(err));
    }
    create(req,res) {
        Products.create(req.body)
        .then(product => res.json({status:"ok",product }))
        .catch(err => res.json(err));
    }
    update(req,res)  {
        Products.findOneAndUpdate({_id: req.params._id}, req.body,{runValidators:true})
        .then(product => res.json({status:"ok",product }))
        .catch(err => res.json(err));
    }
    delete(req,res)  {
        Products.deleteOne({_id: req.params._id})
        .then(products => res.json({status:"ok",products }))
        .catch(err => res.json(err));
    }
    
}
module.exports = new Controller();
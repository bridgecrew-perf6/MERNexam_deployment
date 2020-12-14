const Restaurants = require("../models/res.model")
class Controller {
    gitAll(req,res)  {
        Restaurants.find()
        .then(restaurants => res.json({status:"ok",restaurants }))
        .catch(err => res.json(err));
    }
    gitOne(req,res)  {
        Restaurants.findOne({_id: req.params._id})
        .then(restaurant => res.json({status:"ok",restaurant }))
        .catch(err => res.json(err));
    }
    create(req,res) {
        Restaurants.create(req.body)
        .then(restaurant => res.json({status:"ok",restaurant }))
        .catch(err => res.json(err));
    }
    update(req,res)  {
        Restaurants.findOneAndUpdate({_id: req.params._id}, req.body,{runValidators:true})
        .then(restaurant => res.json({status:"ok",restaurant }))
        .catch(err => res.json(err));
    }
    delete(req,res)  {
        Restaurants.deleteOne({_id: req.params._id})
        .then(restaurants => res.json({status:"ok",restaurants }))
        .catch(err => res.json(err));
    }
    
}
module.exports = new Controller();
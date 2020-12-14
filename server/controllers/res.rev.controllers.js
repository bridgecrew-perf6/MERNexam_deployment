const Restaurants = require("../models/res.model")
const Reviews = require("../models/res.rev.model")
class ReviewsController {
    create(req,res) {
        Restaurants.findOne({_id: req.params._id})
        .then(restaurant => {
            let exists= false;
            for(let rev of restaurant.reviews){
                if(rev.name === req.body.name ){
                    exists= true;
                    break;
                }
            }
            if(exists){
                res.json({errors : {
                    name: {
                        message: `The user ${req.body.name} already left a message`
                    }
                }
                }
                )
                }
            else {

                Reviews.create(req.body)
                .then(newReview =>{
                    Restaurants.findOneAndUpdate({_id: req.params._id}, {$push: {reviews: newReview}},{runValidators:true})
                    .then(restaurant => res.json(restaurant))
                    .catch(err => res.json(err));
                }
                )
                .catch(err => res.json(err));
                
            }
            
    }).catch(err => res.json(err));
    
    }
}
module.exports = new ReviewsController();
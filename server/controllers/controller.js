
const Students = require("../models/res.modelmodels")
class Controller {
    gitAll(req,res)  {
        Students.find()
        .then(students => res.json({status:"ok",students }))
        .catch(err => res.json(err));
    }
    createOne(req,res) {
        Students.create(req.body)
        .then(students => res.json({status:"ok",students }))
        .catch(err => res.json(err));
    }
}
module.exports = new Controller();


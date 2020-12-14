const controller = require("../controllers/res.controller");
const reviewController = require("../controllers/res.rev.controllers");
module.exports = app => {
    app.get("/restaurants",controller.gitAll);
    app.get("/restaurants/:_id",controller.gitOne);
    app.post("/restaurants/new",controller.create);
    app.put("/restaurants/update/:_id",controller.update);
    app.delete("/restaurants/delete/:_id",controller.delete);

    app.post("/restaurants/:_id/review",reviewController.create);

}
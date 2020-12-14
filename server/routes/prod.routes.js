const controller = require("../controllers/prod.controllers");
module.exports = app => {
    app.get("/products",controller.gitAll);
    app.get("/product/:_id",controller.gitOne);
    app.post("/product/new",controller.create);
    app.put("/product/update/:_id",controller.update);
    app.delete("/product/delete/:_id",controller.delete);

}
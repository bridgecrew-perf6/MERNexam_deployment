const controller = require("../controllers/controller");
module.exports = app => {
    app.get("/students",controller.gitAll);
    app.post("/students",controller.createOne) }
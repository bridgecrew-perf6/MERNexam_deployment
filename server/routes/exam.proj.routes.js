const controller = require("../controllers/exam.proj.controllers");
module.exports = app => {
    app.get("/projects",controller.gitAll);
    app.post("/projects/new",controller.create);
    app.put("/projects/start/:_id",controller.start);
    app.put("/projects/complete/:_id",controller.complete);
    app.delete("/projects/delete/:_id",controller.delete);
}
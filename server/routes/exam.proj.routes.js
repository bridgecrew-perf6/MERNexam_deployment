const controller = require("../controllers/exam.proj.controllers");
module.exports = app => {
    app.get("/api/projects",controller.gitAll);
    app.post("/api/project/new",controller.create);
    app.put("/api/project/start/:_id",controller.start);
    app.put("/api/project/complete/:_id",controller.complete);
    app.delete("/api/project/delete/:_id",controller.delete);

}
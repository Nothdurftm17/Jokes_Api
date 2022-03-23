
const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api/test", JokeController.testResponse);

    app.get("/api/jokes/findAll", JokeController.findAll);

    app.post("/api/jokes/create", JokeController.create);

    app.get("/api/jokes/:_id", JokeController.findOne);

    app.delete("/api/jokes/:_id", JokeController.deleteOne);

    app.put("/api/jokes/:_id", JokeController.updateOne);

}
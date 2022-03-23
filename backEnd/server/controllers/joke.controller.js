const Joke = require("../models/joke.model")

module.exports.testResponse = (req,res) => {
    res.json({message: "test response here!"})
}

module.exports.findAll = (req, res) => {
    Joke.find({})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.create = (req, res) => {
    Joke.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.findOne = (req, res) => {
    Joke.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.deleteOne = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.updateOne = (req, res) => {
    Joke.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}
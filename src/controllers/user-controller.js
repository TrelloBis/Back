const userService = require("../services/user-service")
const express = require("express")


function createUser(req, res) {
    const req = express.Request
    const res = express.Response

    const username = req.body.username
    const password = req.body.password

    userService.createUser(username, password)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function getUserByUsername(req, res) {
    const req = express.Request
    const res = express.Response

    const username = req.params.username

    userService.getUserByUsername(username)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

export default {
    createUser,
    getUserByUsername
}
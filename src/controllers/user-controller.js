const { log } = require("console")
const userService = require("../services/user-service")
const express = require("express")


function createUser() {
    const req = express.Request
    const res = express.Response

    const username = req?.body?.username
    const password = req?.body?.password

    userService.createUser(username, password)
        .then((user) => {
            res.json(user)
        })
        // .catch((err) => {
        //     res.status(500).json(err)
        // })
}

function getUserById() {
    const req = express.Request
    const res = express.Response

    const id = req.params.id
    console.log(req.params.id)

    userService.getUserById(id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = {
    createUser,
    getUserById
}
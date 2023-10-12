const taskService = require("../services/task-service");
const express = require("express");

function createTask() {
    const req = express.Request
    const res = express.Response

    const title = req.body.title
    const description = req.body.description
    const priority = req.body.priority
    const state = req.body.state
    const userId = req.body.userId

    taskService.createTask(title, description, priority, state, userId)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function getTasksByUserId() {

    const req = express.Request
    const res = express.Response

    const userId = req.params.userId

    taskService.getTasksByUserId(userId)
        .then((tasks) => {
            res.json(tasks)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function updateTask() {
    const req = express.Request
    const res = express.Response

    const id = req.params.id
    const title = req.body.title
    const description = req.body.description
    const priority = req.body.priority
    const state = req.body.state

    taskService.updateTask(id, title, description, priority, state)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function deleteTask() {
    const req = express.Request
    const res = express.Response

    const id = req.params.id

    taskService.deleteTask(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = {
    createTask,
    getTasksByUserId,
    updateTask,
    deleteTask
}
const taskService = require("../services/task-service");
const express = require("express");

function createTask(req, res) {
    const req = express.Request
    const res = express.Response

    const title = req.body.title
    const description = req.body.description
    const priorite = req.body.priorite
    const etat = req.body.etat
    const userId = req.body.userId

    taskService.createTask(title, description, priorite, etat, userId)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function getTasksByUserId(req, res) {
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

function updateTask(req, res) {
    const req = express.Request
    const res = express.Response

    const id = req.params.id
    const title = req.body.title
    const description = req.body.description
    const priorite = req.body.priorite
    const etat = req.body.etat

    taskService.updateTask(id, title, description, priorite, etat)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

function deleteTask(req, res) {
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

export default {
    createTask,
    getTasksByUserId,
    updateTask,
    deleteTask
}
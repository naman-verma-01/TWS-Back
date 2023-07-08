const express = require("express");
const router = express.Router();
const { login, register,getUserById, getUserByType } = require("../methods/User")

router.post("/login", async (req, res) => {
    try {
        const response = await login(req.body.email, req.body.password)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


router.post("/register", async (req, res) => {
    try {
        const response = await register(req.body)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


router.get("/getUserById", async (req, res) => {
    try {
        const response = await getUserById(req.query.id)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


router.get("/getUserByType", async (req, res) => {
    try {
        const response = await getUserByType(req.query.type)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;
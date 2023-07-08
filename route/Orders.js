const express = require("express");
const router = express.Router();
const {  newOrder, fetchOrdersByTransporter, fetchOrdersByManufacturer, fetchChat, updateChat} = require("../methods/Orders")

router.post("/newOrder", async (req, res) => {
    try {
        const response = await newOrder(req.body)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


router.get("/fetchOrdersByTransporter", async (req, res) => {
    try {
        const response = await fetchOrdersByTransporter(req.query.transporterId)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


router.get("/fetchOrdersByManufacturer", async (req, res) => {
    try {
        const response = await fetchOrdersByManufacturer(req.query.manufacturerId)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})




router.get("/fetchChat", async (req, res) => {
    try {
        const response = await fetchChat(req.query.orderId)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})




router.put("/updateChat", async (req, res) => {
    try {
        const response = await updateChat(req.body.orderId, req.body.newMessage)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})







module.exports = router;
const Orders = require("../model/Orders")

const newOrder = async (orderData) => {
    let response = {}
    try {

        let data = new Orders(orderData)

        data = await data.save()

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


const fetchOrdersByTransporter = async (transporterId) => {
    let response = {}
    try {
        let data = await Orders.find({ transporterId })

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}

const fetchOrdersByManufacturer = async (manufacturerId) => {
    let response = {}
    try {
        let data = await Orders.find({ manufacturerId })
        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


const fetchChat = async (orderId) => {
    let response = {}
    try {
        let data = await Orders.find({ orderId })

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}

const updateChat = async (orderId, newMessage) => {
    let response = {}
    try {

        // console.log(orderId, newMessage)
        let data = await Orders.findOneAndUpdate({ orderId }, { $push: { chat: newMessage } })


        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


module.exports = { newOrder, fetchOrdersByTransporter, fetchOrdersByManufacturer, fetchChat, updateChat }
const User = require("../model/User")

const login = async (email, password) => {
    let response = {}
    try {
        
        let data = await User.find({email, password})

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


const register = async (bodyData) => {
    let response = {}
    try {
        let data = new User(bodyData)

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


const getUserById = async (id) => {
    let response = {}
    try {
        let data = await User.find({_id:id})


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

const getUserByType = async (type) => {
    let response = {}
    try {
        let data = await User.find({type})


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


module.exports = { login, register, getUserById, getUserByType }
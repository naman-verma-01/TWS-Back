const { mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    type: {
        type: String
    },
    password: {
        type: String
    },
    

}, { timestamp: true }

);


const User = mongoose.model('User_ThreeWay', userSchema);
module.exports = User



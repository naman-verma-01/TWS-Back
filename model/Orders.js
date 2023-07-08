const { mongoose } = require("mongoose")

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    quantity: {
        type: String
    },
    pickup: {
        type: String
    },
    transporterId: {
        type: String
    },
    manufacturerId:{
        type: String
    },
    chat:[{
        senderId:String,
        time:Number,
        message:String
    }]

}, { timestamp: true }

);


const Orders = mongoose.model('Orders', orderSchema);
module.exports = Orders



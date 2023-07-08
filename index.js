const mongoose = require('mongoose')
const port = 1800;
const app = require('express')();
const http = require('http');
const {Server} = require('socket.io')
const MONGODB_URI = "mongodb+srv://Naman_Verma:OA3vct6fPNU9SNN5@clustersih2022.kyg4jf6.mongodb.net/?retryWrites=true&w=majority"//'mongodb://localhost/SIH'
const { json } = require('body-parser')
var cors = require('cors');

const OrdersRoute = require('./route/Orders')
const UserRoute = require('./route/User')



app.use(json());
app.use(cors())
app.use("/orders", OrdersRoute);
app.use("/user", UserRoute);


const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000'
    },

})



io.on('connection', (socket) => {
    console.log('User Connected ' + socket.id)

    socket.on("join_room",(data)=>{
        socket.join(data)
    })

    socket.on('send_message', (data) => {
        console.log("RECIVED DATA", data)
        // socket.broadcast.emit(`${data.orderId}`,data.message)
        socket.to(data.orderId).emit(`receive_message`,data.message)

    })
})


const start = async () => {

    mongoose.Promise = global.Promise;
    await mongoose.connect(MONGODB_URI);

    server.listen(port, function () {
        console.log(`Listening on port ${port}`);
    });

};

start();
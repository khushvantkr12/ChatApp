import { Server } from 'socket.io';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT||9000;
const io = new Server(PORT, {
    cors: {
        origin: ["http://localhost:3000","https://chatapp-seven-livid.vercel.app"],
        methods: ["GET", "POST"]
    },
});

let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
};

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
};

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    });

    socket.on('sendMessage', data => {
        const user = getUser(data.receiverId);
        io.to(user?.socketId).emit('getMessage', data);
    });

});

var listChatUsers = ["Shayne"];
module.exports = function(io){
    io.on("connection", function(socket){
        console.log("New connection: " + socket.id);

        // Register Socket username
        socket.on("Client-send-username", function(data){
            console.log("User sent: " + data);
            if(listChatUsers.indexOf(data) >= 0){
                // Fail
                // Username already taken
                listChatUsers.push(data)
                socket.emit("Server-send-fail-register", data )
            }else{
                // Success
                listChatUsers.push(data);
                socket.username = data;
                // Response to this socket
                socket.emit("Server-send-success-register",data);
                // --> Broadcast to all users
                io.sockets.emit("Server-update-list-users", listChatUsers);
            }
        })
    });
}
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

//////////////////////////////////////////////////////////////////////////

const app = express();
app.use(cors());
const server = http.createServer(app);
server.listen(3001, () => {
  console.log("Server is running on port 3001");
});

//////////////////////////////////////////////////////////////////////////

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  },
});

let playersArrayServer = [];

io.on("connection", (socket) => {
  console.log("New client connected ==>", "socket.id :", socket.id);
  console.log("playersArrayServer: ", playersArrayServer);

  socket.emit("init", {
    id: socket.id,
    playersArrayServer: playersArrayServer,
  });

  socket.on("move-myPlayer", (myIno) => {
    const update = playersArrayServer.filter(
      (player) => player.id !== myIno.id
    );
    console.log("update: ", update);
    playersArrayServer = [...update, myIno];

    console.log("playersArrayServer", playersArrayServer);
    console.log("playersArrayServer: ", playersArrayServer);
    socket.broadcast.emit("move-otherPlayer", playersArrayServer);
  });

  socket.on("new-player", (player) => {
    player.id = socket.id;
    playersArrayServer.push(player);
    socket.broadcast.emit("new-player", player);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

//////////////////////////////////////////////////////////////////////////

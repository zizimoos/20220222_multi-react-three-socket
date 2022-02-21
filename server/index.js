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

const playersArrayServer = [];

io.on("connection", (socket) => {
  console.log("New client connected");
  console.log("socket.id", socket.id);

  socket.emit("init", {
    id: socket.id,
    playersArrayServer: playersArrayServer,
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

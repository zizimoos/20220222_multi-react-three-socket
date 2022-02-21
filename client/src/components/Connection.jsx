import io from "socket.io-client";

const socket = io("http://localhost:3001");

let players = [];

socket.on("init", ({ id, playersArrayServer }) => {
  const player = new Player({ id });

  socket.emit("new-player", player);
  socket.on("new-player", (ply) => ply.push(new Player(ply)));

  players = playersArrayServer
    .map((player) => new Player(player))
    .concat(player);
});

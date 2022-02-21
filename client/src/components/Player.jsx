import React, { useRef } from "react";
import Controls from "../controls";

import io from "socket.io-client";
const socket = io("http://localhost:3001");

function Player() {
  const playerMove = useRef(null);
  Controls(playerMove);

  let players = [];

  socket.on("init", ({ id, playersArrayServer }) => {
    console.log("init", { id, playersArrayServer });
    const player = id;

    socket.emit("new-player", player);
    socket.on("new-player", (ply) => players.push(new Player(ply)));

    players = playersArrayServer
      .map((player) => new Player(player))
      .concat(player);
  });

  console.log("players", players);

  return (
    <group ref={playerMove}>
      <mesh position={[0, 0.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="fuchsia" />
      </mesh>
    </group>
  );
}

export default Player;

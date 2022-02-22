import React, { useEffect } from "react";
import styled from "styled-components";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GroundField from "./components/GroundField";
import Player from "./components/Player";

import io from "socket.io-client";
const socket = io("http://localhost:3001");

const CanvasContainer = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

function App() {
  const [PlayerArry, setPlayerArry] = React.useState([]);
  const [myId, setMyId] = React.useState("");

  socket.on("init", ({ id, playersArrayServer }) => {
    setMyId(id);
    setPlayerArry(playersArrayServer);
    socket.on("move-otherPlayer", (playersArrayServer) => {
      setPlayerArry(playersArrayServer);
    });
  });

  return (
    <CanvasContainer>
      <Canvas camera={{ position: [-5, 10, 5] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <Player id={myId} socket={socket} />
          {PlayerArry.map((otherPlayer, index) => {
            console.log(otherPlayer);
            return (
              <group key={index}>
                <mesh position={[otherPlayer.x, 0.5, otherPlayer.z]}>
                  <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                  <meshStandardMaterial attach="material" color="fuchsia" />
                </mesh>
              </group>
            );
          })}

          <GroundField />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </CanvasContainer>
  );
}

export default App;

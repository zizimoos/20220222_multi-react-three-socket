import React from "react";
import styled from "styled-components";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GroundField from "./components/GroundField";
import Player from "./components/Player";

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
  const PlayerArry = [
    { id: "xxxx", name: "xxxx" },
    { id: "aaaa", name: "aaaa" },
    { id: "cccc", name: "cccc" },
  ];

  return (
    <CanvasContainer>
      <Canvas camera={{ position: [-5, 10, 5] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          {PlayerArry.map((player, index) => {
            console.log(player);
            return (
              <group key={index} name={player.name}>
                <Player name={player.name} id={player.id} />
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

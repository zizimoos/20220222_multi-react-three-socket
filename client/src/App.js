import io from "socket.io-client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

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

const socket = io("http://localhost:3001");

function App() {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [-5, 10, 5] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <Player />
          <GroundField />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
        />
      </Canvas>
    </CanvasContainer>
  );
}

export default App;

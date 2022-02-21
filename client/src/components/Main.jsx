import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import GroundField from "./GroundField";
import Player from "./Player";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Main() {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [-5, 10, 5] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} color="white" intensity={1} />
        <Suspense fallback={null}>
          <Player />
          <GroundField />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </CanvasContainer>
  );
}

export default Main;

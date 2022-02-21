import React, { useRef } from "react";
import Controls from "../controls";

function Player() {
  const player = useRef(null);
  Controls(player);
  return (
    <mesh ref={player} position={[0, 0.5, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="fuchsia" />
    </mesh>
  );
}

export default Player;

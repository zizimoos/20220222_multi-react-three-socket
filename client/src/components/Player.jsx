import React, { useRef } from "react";
import Controls from "../controls";

function Player({ id, name }) {
  const move = useRef(null);
  Controls(move);

  console.log("player component", id, name);

  return (
    <group ref={move}>
      <mesh position={[0, 0.5, 0]}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="fuchsia" />
      </mesh>
    </group>
  );
}

export default Player;

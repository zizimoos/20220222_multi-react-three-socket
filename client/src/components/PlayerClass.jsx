class PlayerClass {
  constructor(id, x, z) {
    this._id = id;
    this._x = x;
    this._z = z;
    this.newPosition = { x: x, y: 0.5, z: z };
  }

  Player({ _id, _x, _z }) {
    return (
      <group>
        <mesh position={[_x, 0.5, _z]}>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color="fuchsia" />
        </mesh>
      </group>
    );
  }
}

export default PlayerClass;

class Player {
  constructor(id) {
    this._id = id;
  }
  draw() {
    return (
      <group ref={this._id}>
        <mesh position={[0, 0.5, 0]}>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color="fuchsia" />
        </mesh>
      </group>
    );
  }
}
export default Player;

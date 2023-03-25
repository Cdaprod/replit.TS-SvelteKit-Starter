// MyThreeComponent.tsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

interface MyThreeComponentProps {
  // Your component props here
}

const MyThreeComponent: React.FC<MyThreeComponentProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
    </Canvas>
  );
};

export default MyThreeComponent;

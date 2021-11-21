import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Modeling } from "./Modeling";

type Props = {
  autoRotation?: boolean;
  enableClick?: boolean;
  name: string;
};

export const ModelingContainer: React.FC<Props> = ({
  autoRotation = false,
  enableClick = false,
  name,
}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.08} />
      <pointLight position={[5, 5, 5]} />
      <PerspectiveCamera makeDefault position={[4, 5, 5]} />
      <Modeling name={name} autoRotation={autoRotation} />
      <OrbitControls
        enablePan={enableClick}
        enableZoom={enableClick}
        enableRotate={enableClick}
      />
    </Canvas>
  );
};

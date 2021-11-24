import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

type Props = {
  children: JSX.Element;
  enableClick?: boolean;
};

export const CanvasWrapper: React.FC<Props> = ({
  children,
  enableClick = false,
}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.08} />
      <pointLight position={[5, 5, 5]} />
      <PerspectiveCamera makeDefault position={[4, 5, 5]} />
      {children}
      <OrbitControls
        enablePan={enableClick}
        enableZoom={enableClick}
        enableRotate={enableClick}
      />
    </Canvas>
  );
};

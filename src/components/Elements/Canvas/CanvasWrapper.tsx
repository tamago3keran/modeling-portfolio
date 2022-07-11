import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

type Props = {
  children: JSX.Element;
  enableClick?: boolean;
};

export const CanvasWrapper: React.FC<Props> = ({
  children,
  enableClick = false
}) => {
  const renderModel = () => {
    return <Suspense fallback={null}>{children}</Suspense>;
  };

  return (
    <Canvas>
      <ambientLight intensity={0.08} />
      <pointLight position={[5, 5, 5]} />
      <PerspectiveCamera makeDefault position={[4, 5, 5]} />
      {renderModel()}
      <OrbitControls
        enablePan={enableClick}
        enableZoom={enableClick}
        enableRotate={enableClick}
      />
    </Canvas>
  );
};

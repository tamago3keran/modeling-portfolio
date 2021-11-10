import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { selectModelingComponent } from "../../lib/SelectModelingComponent";

type Props = {
  name: string;
};

export const Modeling: React.FC<Props> = (props) => {
  const Modeling = selectModelingComponent(props.name);

  return (
    <Canvas>
      <ambientLight intensity={0.08} />
      <pointLight position={[5, 5, 5]} />
      <PerspectiveCamera makeDefault position={[4, 5, 5]} />
      <Suspense fallback={null}>{Modeling}</Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

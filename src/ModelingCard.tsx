import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Notebook } from "./Notebook";
import { House } from "./House";

type Props = {
  name: string;
};

export const ModelingCard: React.FC<Props> = (props) => {
  const Model = selectModelingComponent(props.name);

  return (
    <Canvas>
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>{Model}</Suspense>
      <OrbitControls />
    </Canvas>
  );
};

const selectModelingComponent = (name: string) => {
  switch (name) {
    case "notebook":
      return <Notebook />;
    case "house":
      return <House />;
  }
};

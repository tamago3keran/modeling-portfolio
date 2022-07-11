import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type Props = {
  name?: string | null;
};

export const Modeling: React.FC<Props> = ({ name }) => {
  const gltf = useLoader(GLTFLoader, `/models/${name}.gltf`);
  return <primitive object={gltf.scene} />;
};
